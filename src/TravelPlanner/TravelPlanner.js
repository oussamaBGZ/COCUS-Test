export default class TravelPlanner extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

  }

  connectedCallback() {
    // Create destination element
    const destination = document.createElement('p');

    // Create date element
    const date = document.createElement('p');

    // add a label text
    destination.textContent = 'Selected Destination: ';
    date.textContent = 'Selected Date: ';

    // Append destination and date elements to the shadow DOM
    this.shadowRoot.appendChild(destination);
    this.shadowRoot.appendChild(date);

    // Listen for date-chosen and destination-chosen events
    const destinationInput = document.getElementById(this.getAttribute('destination-input'));
    const dateInput = document.getElementById(this.getAttribute('date-input'));

    destinationInput.addEventListener('item-selected', (event) => {
      const selectedDestination = event.detail.value;
      destination.textContent = `Selected Destination: ${selectedDestination}`;
    });

    dateInput.addEventListener('date-chosen', (event) => {
      const chosenDate = event.detail.date;

      // Using toLocaleDateString is more flexible and reliable than manually formatting the date string, 
      // as it handles different date formats, time zones, and locales.
      const germanDate = new Date(chosenDate).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
      date.textContent = `Selected Date: ${germanDate}`;
    });
  }
}

// Define the custom element
customElements.define('travel-planner', TravelPlanner);
