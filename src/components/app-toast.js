class AppToast extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                .toast {
                position: fixed;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%) translateY(20px);
                background: #333;
                color: white;
                padding: 12px 20px;
                border-radius: 10px;
                opacity: 0;
                transition: all 0.3s ease;
                pointer-events: none;
                }

                .toast.show {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
                }
            </style>

            <div class="toast"></div>
        `

        this.el = this.shadowRoot.querySelector('.toast')
    }

    show(message) {
        this.el.textContent = message
        this.el.classList.add('show')

        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
            this.el.classList.remove('show')
        }, 2000)
    }
}

customElements.define('app-toast', AppToast)