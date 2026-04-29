import styles from '../styles/toolbar.css?raw'

const sheet = new CSSStyleSheet();
sheet.replaceSync(styles);

class ToolbarPanel extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })

        this.shadowRoot.adoptedStyleSheets = [sheet]
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <div class='toolbar'>
                <div>
                    <button id="generate">➕ Сгенерировать полигон</button>
                    <div>
                        <button id="undo">↩️</button>
                        <button id="redo">↪️</button>
                        <button id="color">🎨</button>
                        <input type="color" id="colorPicker" hidden />
                    </div>
                    <button id="delete">🗑️ Удалить выбранный</button>
                    <button id="deleteAll">🗑️ Удалить все</button>
                </div>
                <div>
                    <button id="export">💾 Сохранить</button>
                    <button id="import">📎 Загрузить</button>
                    <input type="file" id="file" hidden accept="application/JSON" />
                </div>
            </div>
        `

        this.shadowRoot.getElementById("generate")
            .addEventListener('click', () => {
                this.dispatchEvent(new CustomEvent('generate'))
            })

        this.shadowRoot.getElementById("undo")
            .addEventListener('click', () => {
                this.dispatchEvent(new CustomEvent('undo'))
            })

        this.shadowRoot.getElementById("redo")
            .addEventListener('click', () => {
                this.dispatchEvent(new CustomEvent('redo'))
            })

        this.shadowRoot.getElementById("delete")
            .addEventListener('click', () => {
                this.dispatchEvent(new CustomEvent('delete'))
            })

        this.shadowRoot.getElementById('deleteAll')
            .addEventListener('click', () => {
                this.dispatchEvent(new CustomEvent('deleteAll'))
            })

        this.shadowRoot.getElementById("export")
            .addEventListener('click', () => {
                this.dispatchEvent(new CustomEvent('export'))
            })

        const fileInput = this.shadowRoot.getElementById("file")

        this.shadowRoot.getElementById("import")
            .addEventListener('click', () => {
                fileInput.click()
            })

        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0]
            if (!file) return

            this.dispatchEvent(new CustomEvent('import', {
                detail: file
            }))

            fileInput.value = ''
        })

        const colorBtn = this.shadowRoot.getElementById("color")
        const colorInput = this.shadowRoot.getElementById("colorPicker")

        let targetPolygon = null
        
        colorBtn.addEventListener('click', () => {
            // Просим у app-root передать выбранный полигон
            this.dispatchEvent(new CustomEvent('requestSelected', {
                detail: (selected) => {
                    targetPolygon = selected

                    if (!targetPolygon) return

                    colorInput.value = targetPolygon.colorBtn
                    colorInput.click()
                }
            }))
        })

        colorInput.addEventListener('change', (e) => {
            if (!targetPolygon) return

            this.dispatchEvent(new CustomEvent('changeColor', {
                detail: {
                    color: e.target.value,
                    polygonId: targetPolygon.id
                }
            }))

            targetPolygon = null
        })
    }
}

customElements.define('toolbar-panel', ToolbarPanel)