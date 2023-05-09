import CustomElementRenderer from '../shared/CustomElementRenderer.js';
import html from './Search.template.js'


export default class AutocompleteInput extends CustomElementRenderer {

    // Initialize variables
    timeoutId = null;

    constructor() {
        super();
        // Create shadow DOM for encapsulation
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render(html);
        this.handelChange()
    }

    handelChange() {
        const input = this.shadowRoot.querySelector('input')

        // Add event listener for input changes
        input.addEventListener('input', ({ target: { value } }) => this.fetchData(value));
    }

    fetchData(value) {
        const list = this.shadowRoot.querySelector('ul')
        if (!value) {
            list.innerHTML = '';
            return
        }

        // Clear the timeout to prevent API calls from being made too frequently
        clearTimeout(this.timeoutId);

        // Delay API call by 200ms to avoid unneeded load
        this.timeoutId = setTimeout(() => {
            // Call API with input value
            fetch(`https://api.cloud.tui.com/search-destination/v2/de/package/TUICOM/2/autosuggest/peakwork/${value}`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(JSON.stringify(data))
                    this.handelError(data)
                    this.renderList(data)
                }).catch(()=>this.handelError())
        }, 200);
    }

    renderList(data) {
        const list = this.shadowRoot.querySelector('ul')
        const input = this.shadowRoot.querySelector("input")

        // Clear the list
        list.innerHTML = '';

        // Populate the list with autocomplete results
        data[0].items.forEach((result) => {
            const item = document.createElement('li');
            item.textContent = result.name;
            item.addEventListener('click', () => {
                // Set the input value to the clicked item's text content
                input.value = result.name;
             
                // create a custom Event
                this.NewEvent('item-selected',{ value: result.name })

                // Clear the list
                list.innerHTML = '';
            });
            list.appendChild(item);
        });
    }

    handelError(data=[]){
        const errorMsg = this.shadowRoot.querySelector("small")
        if(!errorMsg) return
        if(data.length ===0) errorMsg.style.display="block"
        else errorMsg.style.display="none"
    }
}

customElements.define('autocomplete-input', AutocompleteInput);


