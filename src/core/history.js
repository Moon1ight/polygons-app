export class History {
    constructor() {
        this.stack = []
        this.index = -1
    }

    push(state) {
        // Обрезать redo ветку
        this.stack = this.stack.slice(0, this.index + 1)

        // Сохранить копию
        this.stack.push(this.clone(state))
        this.index++
    }

    undo() {
        if (this.index <= 0) return null

        this.index--
        return this.clone(this.stack[this.index])
    }

    redo() {
        if (this.index >= this.stack.length - 1) return null

        this.index++
        return this.clone(this.stack[this.index])
    }

    clone(state) {
        return JSON.parse(JSON.stringify(state))
    }
}