import styles from '../styles/info.css?raw'

const sheet = new CSSStyleSheet();
sheet.replaceSync(styles);

class InfoPanel extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })

        this.shadowRoot.adoptedStyleSheets = [sheet]
    }

    connectedCallback() {
        this.render(0, null)
    }

    render(count, selected) {
        this.shadowRoot.innerHTML = `
            <div class='info'>
                <div>Количество полигонов: <b>${count}</b></div>
                <div>
                    Выбран: <b>${selected ? selected.id : 'Ничего не выбрано'}</b>
                </div>
            </div>
        `
    }
}

customElements.define('info-panel', InfoPanel)