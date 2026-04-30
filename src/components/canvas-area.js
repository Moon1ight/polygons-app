import styles from '../styles/canvas.css?raw'

const sheet = new CSSStyleSheet()
sheet.replaceSync(styles)

class CanvasArea extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })

        this.polygons = []
        this.selected = null
        this.hovered = null

        // Drag State
        this.beforeDragState = null
        this.dragging = false
        this.prev = null

        this.shadowRoot.adoptedStyleSheets = [sheet]
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <canvas class='canvas'></canvas>
        `

        this.canvas = this.shadowRoot.querySelector('canvas')
        this.ctx = this.canvas.getContext('2d')

        this.resizeCanvas()

        // События
        this.canvas.addEventListener('mousedown', this.handleMouseDown.bind(this))
        this.canvas.addEventListener('mousemove', this.handleMouseMove.bind(this))
        window.addEventListener('mouseup', this.handleMouseUp.bind(this))
        window.addEventListener('resize', () => this.resizeCanvas())

        this.draw()
    }

    setPolygons(polygons) {
        this.polygons = polygons
        this.draw()
        this.animate()
    }

    //=== DRAG START
    handleMouseDown(e) {
        const { x,y } = this.getMousePosition(e)

        // Ищем полигон под курсором
        let target = null

        for (let i = this.polygons.length - 1; i >= 0; i--) {
            if (this.isPointInsidePolygon(this.polygons[i], x, y)) {
                target = this.polygons[i]
                break
            }
        }

        if (!target) {
            this.selected = null

            this.dispatchEvent(new CustomEvent('select'))
            this.draw()

            return
        }

        // Если кликаем по полигону - сохраняем состояние для drag
        this.beforeDragState = JSON.parse(JSON.stringify(this.polygons))

        // Выбираем полигон
        this.selected = target

        // Начинаем drag
        this.dragging = true
        this.prev = { x, y }

        // Смена курсора
        this.canvas.style.cursor = 'grabbing'

        // Для инфо-панели
        this.dispatchEvent(new CustomEvent('select'))

        this.draw()
    }

    //=== DRAG MOVE
    handleMouseMove(e) {
        const { x,y } = this.getMousePosition(e)

        if (this.dragging) {
            let dx = x - this.prev.x
            let dy = y - this.prev.y

            this.constrainMovement(this.polygon, dx, dy)
            
            this.prev = { x, y }

            this.draw()
            return
        }

        let newHovered = null

        for (let i = this.polygons.length - 1; i >= 0; i--) {
            if (this.isPointInsidePolygon(this.polygons[i], x, y)) {
                newHovered = this.polygons[i]
                break
            }
        }

        if (newHovered !== this.hovered) {
            this.hovered  = newHovered

            this.canvas.style.cursor = this.hovered ? 'pointer' : 'default'

            this.draw()
        }
    }

    //=== DRAG END
    handleMouseUp(e) {
        if (!this.dragging) return

        this.dragging = false
        this.prev = null

        if (this.beforeDragState) {
            this.dispatchEvent(new CustomEvent('history', {
                detail: this.polygons
            }))
        }

        this.beforeDragState = null

        this.canvas.style.cursor = this.hovered ? 'pointer' : 'default'

        // Тут позже добавлю сохранение в историю
    }

    //====== Utils ======

    getMousePosition(e) {
        const rect = this.canvas.getBoundingClientRect()

        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        }
    }

    // Проверка точки внутри полигона
    isPointInsidePolygon(polygon, x, y) {
        const ctx = this.ctx

        ctx.beginPath()

        polygon.points.forEach((point, index) => {
            if (index === 0) {
                ctx.moveTo(point.x, point.y)
            } else {
                ctx.lineTo(point.x, point.y)
            }
        })

        ctx.closePath()

        return ctx.isPointInPath(x, y)
    }

    // Запрет на выход за границу полотна
    constrainMovement(polygon, dx, dy) {
        // Находим границы полигона
        let minX = Infinity
        let maxX = -Infinity
        let minY = Infinity
        let maxY = -Infinity

        this.selected.points.forEach(point => {
            if (point.x < minX) minX = point.x
            if (point.x > maxX) maxX = point.x
            if (point.y < minY) minY = point.y
            if (point.y > maxY) maxY = point.y
        })

        const canvasWidth = this.canvas.width
        const canvasHeight = this.canvas.height

        // Ограничение по X
        if (minX + dx < 0) {
            dx = -minX
        }

        if (maxX + dx > canvasWidth) {
            dx = canvasWidth - maxX
        }

        // Ограничение по Y
        if (minY + dy < 0) {
            dy = -minY
        }

        if (maxY + dy > canvasHeight) {
            dy = canvasHeight - maxY
        }

        // Движение
        
        // Создаем "виртуально перемещенный" полигон
        const moved = this.getMovedPolygon(this.selected, dx, dy)

        // Проверка на пересечение с другими полигонами
        let intersects = false

        for (let polygon of this.polygons) {
            if (polygon === this.selected) continue

            if (this.polygonsIntersect(moved, polygon)) {
                intersects = true
                break
            }
        }

        // Если пересечение есть - не двигаем
        if (!intersects) {
            this.selected.points.forEach(point => {
                point.x += dx,
                point.y += dy
            })
        }
    }

    // Запрет на наезжание полигонов
    polygonsIntersect(p1, p2) {
        // Проверяем, есть ли хоть одна точка p1 внутри p2
        for (let point of p1.points) {
            if (this.isPointInsidePolygon(p2, point.x, point.y)) {
                return true
            }
        }
        // Проверяем обратное
        for (let point of p2.points) {
            if (this.isPointInsidePolygon(p1, point.x, point.y)) {
                return true
            }
        }

        return false
    }

    // Виртуальное перемещение
    getMovedPolygon(polygon, dx, dy) {
        return {
            ...polygon,
            points: polygon.points.map(point => ({
                x: point.x + dx,
                y: point.y + dy
            }))
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        this.polygons.forEach(polygon => {
            this.drawPolygon(polygon)
        })
    }

    drawPolygon(polygon) {
        const ctx = this.ctx

        const center = this.getPolygonCenter(polygon)
        ctx.save()

        if (polygon.isAnimating) {
            ctx.translate(center.x, center.y)
            ctx.scale(polygon.scale, polygon.scale)
            ctx.translate(-center.x, -center.y)
        }

        ctx.beginPath()
        const [first, ...rest] = polygon.points

        ctx.moveTo(first.x, first.y)
        rest.forEach(point => ctx.lineTo(point.x, point.y))
        ctx.closePath()

        ctx.fillStyle = polygon.color
        ctx.fill()

        // Выделение выбранного полигона
        if (polygon === this.selected) {
            ctx.strokeStyle = '#ff5e00';
            ctx.lineWidth = 5;
        } else if (polygon === this.hovered) {
            ctx.strokeStyle = '#4b75ff'
            ctx.lineWidth = 3
        } else {
            ctx.strokeStyle = 'black'
            ctx.lineWidth = 2
        }

        ctx.stroke()

        ctx.restore()
    }

    getPolygonCenter(polygon) {
        let x = 0
        let y = 0

        polygon.points.forEach(point => {
            x += point.x
            y += point.y
        })

        return {
            x: x / polygon.points.length,
            y: y / polygon.points.length
        }
    }

    // Анимация появления полигона
    animate() {
        let needsRedraw = false

        this.polygons.forEach(polygon => {
            if (polygon.isAnimating) {
                polygon.scale += 0.1

                if (polygon.scale >= 1) {
                    polygon.scale = 1
                    polygon.isAnimating = false
                }

                needsRedraw = true
            }
        })

        if (needsRedraw) {
            this.draw()
            requestAnimationFrame(() => this.animate())
        }
    }

    resizeCanvas() {
        const rect = this.canvas.getBoundingClientRect()

        const minHeight = 400

        this.canvas.width = rect.width
        this.canvas.height = Math.max(rect.height, minHeight)

        this.draw()
    }
}

customElements.define('canvas-area', CanvasArea)