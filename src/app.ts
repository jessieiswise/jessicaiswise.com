import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import './components/header.ts';

@customElement('my-app')
export class App extends LitElement {
    static styles = css` 
        body {
          margin: 0;
        }
    `
    render() {
        return html`
      <my-header></my-header>
      <main>
        <!-- Rest of your app goes here -->
      </main>
    `;
    }
}
