import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import AutocompleteInput from './AutocompleteInput';
import { fixture } from '@open-wc/testing-helpers';

describe('AutocompleteInput', () => {

  it('renders correctly', async () => {
    const el = await fixture(`<autocomplete-input></autocomplete-input>`);
    expect(el.shadowRoot.querySelector('input')).not.toBeNull();
    expect(el.shadowRoot.querySelector('ul')).not.toBeNull();
    expect(el.shadowRoot.querySelector('small')).not.toBeNull();
  });

  it('fetches data from the API correctly', async () => {
    const autocompleteInput = new AutocompleteInput();
    const response = [{ "items": [{ "name": "result 1" }] }]
    global.fetch = vi.fn().mockResolvedValue({
      json: () => Promise.resolve(response)
    });
    autocompleteInput.renderList = vi.fn()
    autocompleteInput.fetchData('search term');
    await new Promise(resolve => setTimeout(resolve, 250)); // Wait for the fetchData timeout
    expect(global.fetch).toHaveBeenCalledWith('https://api.cloud.tui.com/search-destination/v2/de/package/TUICOM/2/autosuggest/peakwork/search term');
    expect(autocompleteInput.renderList).toHaveBeenCalledWith(response);
    global.fetch.mockRestore();
  });

  it('fetches data from the API wrongly', async () => {
    const autocompleteInput = new AutocompleteInput();
    const response = [{ "items": [] }]
    global.fetch = vi.fn().mockResolvedValue({
      json: () => Promise.resolve(response)
    });
    autocompleteInput.handelError = vi.fn()
    autocompleteInput.fetchData('search term');
    await new Promise(resolve => setTimeout(resolve, 250)); // Wait for the fetchData timeout
    expect(global.fetch).toHaveBeenCalledWith('https://api.cloud.tui.com/search-destination/v2/de/package/TUICOM/2/autosuggest/peakwork/search term');
    expect(autocompleteInput.handelError).toHaveBeenCalledWith(response);
    global.fetch.mockRestore();
  });
});
