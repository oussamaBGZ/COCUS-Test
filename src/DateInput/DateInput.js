import CustomElementRenderer from "../shared/CustomElementRenderer";
import html from './DateInput.template.js'

export default class DateInput extends CustomElementRenderer {
    constructor() {
        super();
        // Create a shadow root for the component
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render(html);
        const input = this.shadowRoot.querySelector('input')
        // Listen for changes to the input and emit a custom event when a date is chosen
        input.addEventListener('change', (event) => this.handelChange(event));
    }

    handelChange(event) {
        const p = this.shadowRoot.querySelector('p')
        p.innerHTML = event.target.value
        this.NewEvent('date-chosen', { date: event.target.value })
    }
}

// Define the custom element
customElements.define('custom-date-input', DateInput);
