import { expect } from 'vitest';
import { fixture } from "@open-wc/testing-helpers";

import './DateInput.js';

describe('DateInput', () => {

  it('renders an input element', async () => {
    const el = await fixture(`<custom-date-input></custom-date-input>`);
    expect(el.shadowRoot.querySelector('input')).not.toBeNull();
  });

  it('emits a date-chosen event when a date is selected', async () => {
    const el = await fixture(`<custom-date-input></custom-date-input>`);

    const input = el.shadowRoot.querySelector('input');
    const p = el.shadowRoot.querySelector('p');
    const date = '2023-05-08';
    input.value = date;
    input.dispatchEvent(new Event('change'));
    
    expect(p.innerHTML).toBe(
      date
    );
  });
});
