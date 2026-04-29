import './canvas-area.js'
import './toolbar.js'
import { createRandomPolygon } from '../core/polygon.js'
import { History } from '../core/history.js'
import './app-toast.js'
import './info-panel.js'

class AppRoot extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })

        this.polygons = [];
        this.history = new History()
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                .layout {
                    display: flex;
                    flex-direction: column; 
                    padding: 10px 20px;
                    min-height: 100vh;
                    box-sizing: border-box;
                }
                info-panel {
                    // width: 50%;
                }
                canvas-area {
                    flex: 1;
                    display: flex;
                }
                toolbar-panel {
                    width: 100%;
                }
            </style>

            <div class="layout">
                <info-panel></info-panel>
                <toolbar-panel></toolbar-panel>
                <canvas-area></canvas-area>
                <app-toast></app-toast>
            </div>
        `

        const toolbar = this.shadowRoot.querySelector('toolbar-panel')
        const canvas = this.shadowRoot.querySelector('canvas-area')
        const toast = this.shadowRoot.querySelector('app-toast')

        // История
        canvas.addEventListener('history', (e) => {
            this.history.push(e.detail)
        })
        // При выборе элемента обновить инфо-панель
        canvas.addEventListener('select', () => {
            this.updateInfo();
        });

        // Создать полигон (кнопка)
        toolbar.addEventListener('generate', () => {
            const MAX_TRIES = 50
            let polygon = null

            for (let i = 0;i < MAX_TRIES; i++) {
                const width = canvas.canvas.width
                const height = canvas.canvas.height

                const candidate = createRandomPolygon(width, height)

                const intersects = this.polygons.some(polygon => 
                    canvas.polygonsIntersect(candidate, polygon)
                )

                if (!intersects) {
                    polygon = candidate
                    break
                }
            }

            // Если на канвасе нет места
            if (!polygon) {
                toast.show('Не удалось создать полигон без пересечений')
                return
            }

            this.polygons.push(polygon)
            this.history.push(this.polygons) // Записываем в историю

            canvas.setPolygons(this.polygons)

            this.updateInfo();
        })

        // Удаление элементов
        toolbar.addEventListener('delete', () => {
            const selected = canvas.selected
            
            if (!selected) {
                toast.show('Ничего не выбрано')
                return
            }

            this.polygons = this.polygons.filter(polygon => polygon !== selected)

            canvas.selected = null

            this.history.push(this.polygons)
            
            canvas.setPolygons(this.polygons)

            this.updateInfo();

            toast.show('Полигон удален')
        })

        toolbar.addEventListener('deleteAll', () => {
            this.polygons = []
            this.history.push(this.polygons)
            canvas.setPolygons(this.polygons)

            this.updateInfo();

            toast.show('Полотно очищено')
        })

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Delete') {
                toolbar.dispatchEvent(new CustomEvent('delete'))
            }
        })

        // Undo/redo, в том числе на Ctrl+z / Ctrl+y
        toolbar.addEventListener('undo', () => {
            const state = this.history.undo()
            if (state) {
                this.polygons = state
                canvas.setPolygons(this.polygons)
            }

            this.updateInfo();
        })

        toolbar.addEventListener('redo', () => {
            const state = this.history.redo()
            if (state) {
                this.polygons = state
                canvas.setPolygons(this.polygons)
            }

            this.updateInfo();
        })

        window.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'z') {
                const state = this.history.undo()
                if (state) {
                    this.polygons = state
                    canvas.setPolygons(this.polygons)
                }
            }

            if (
                e.ctrlKey &&
                (e.key === 'y' || (e.shiftKey && e.key === 'Z'))
            ) {
                const state = this.history.redo()
                if (state) {
                    this.polygons = state;
                    canvas.setPolygons(this.polygons)
                }           
            }
        })

        // Загрузка и сохранение в JSON
        toolbar.addEventListener('export', () => {
            const data = JSON.stringify(this.polygons, null, 2)

            const blob = new Blob([data], { type: 'application/json' })
            const url = URL.createObjectURL(blob)

            const a = document.createElement('a')
            a.href = url;
            a.download = 'polygons.json'
            a.click()

            URL.revokeObjectURL(url)
            toast.show('Файл успешно сохранен')
        })

        toolbar.addEventListener('import', (e) => {
            const file = e.detail

            const reader = new FileReader()

            reader.onload = () => {
                try {
                    const data = JSON.parse(reader.result)

                    if (!Array.isArray(data)) throw new Error()
                    
                    this.polygons = data.map(polygon => ({
                        id: polygon.id || Date.now() + Math.random(),
                        points: polygon.points,
                        color: polygon.color,
                        scale: 1,
                        isAnimating: false
                    }))

                    canvas.selected = null

                    this.history.push(this.polygons)
                    canvas.setPolygons(this.polygons)

                    this.updateInfo()

                    toast.show('Файл успешно загружен')
                } catch {
                    toast.show('Ошибка загрузки файла')
                }
            }
            reader.readAsText(file)
        })

        // Смена цвета у выбранного полигона
        toolbar.addEventListener('requestSelected', (e) => {
            e.detail(canvas.selected)
        })

        toolbar.addEventListener('changeColor', (e) => {
            const { color, polygonId } = e.detail

            const polygon = this.polygons.find(polygon => polygon.id === polygonId)

            if (!polygon) {
                toast.show('Полигон не выбран')
                return
            }

            this.history.push(JSON.parse(JSON.stringify(this.polygons)));

            polygon.color = color

            canvas.draw()
        })
    }

    // Обновление информации в информационной панели
    updateInfo() {
        const info = this.shadowRoot.querySelector('info-panel')
        const canvas = this.shadowRoot.querySelector('canvas-area')
        
        info.render(this.polygons.length, canvas.selected)
    }
}

customElements.define('app-root', AppRoot)