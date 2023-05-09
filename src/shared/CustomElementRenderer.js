class CustomElementRenderer extends HTMLElement {
    
    // Define a method called htmlToElement that takes an HTML string as an argument and returns an object with two properties: cssContent and htmlContent
    htmlToElement(html) {
        // Create a new template element
        var template = document.createElement('template');
        
        // Remove whitespace from the beginning and end of the HTML string
        html = html.trim();
        
        // Set the innerHTML of the template element to the provided HTML string
        template.innerHTML = html;
        
        // Return an object with two properties: cssContent (the first child of the template's content property) and htmlContent (the last child of the template's content property)
        return { cssContent: template.content.firstChild, htmlContent: template.content.lastChild };
    }

    // Define a method called render that takes an HTML string as an argument
    render(html) {
        // Get the shadowRoot property of the element (which is a reference to the element's Shadow DOM)
        const { shadowRoot } = this;
        
        // Use the htmlToElement method to get the cssContent and htmlContent elements from the provided HTML string
        const { cssContent, htmlContent } = this.htmlToElement(html);
        
        // Clear the shadowRoot by setting its innerHTML property to an empty string
        shadowRoot.innerHTML = '';
        
        // Append the cssContent and htmlContent elements to the shadowRoot
        shadowRoot.appendChild(cssContent)
        shadowRoot.appendChild(htmlContent)
    }

    NewEvent(name, body){
        const customEvent = new CustomEvent(name, {
            bubbles: true,
            detail: body
        });
        this.dispatchEvent(customEvent);
    }
    
}

export default CustomElementRenderer
