import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('portfolio-item')
export class PortfolioItem extends LitElement {
    @property({ type: Object }) item = {};

    static styles = css`
    /* Add some styles here */
  `;

    render() {
        return html`
      <!-- Add some HTML here -->
    `;
    }
}
