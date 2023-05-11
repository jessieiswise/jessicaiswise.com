import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { SimplrRouter } from "@simplr-wc/router";

@customElement('my-app')
export class App extends LitElement {

    private router = new Router();

    connectedCallback() {
        super.connectedCallback();
        this.router.setConfig({
            root: this.shadowRoot!,
            routes: {
                '/': () => html`<h1>Home</h1>`,
                '*': () => html`<h1>Not Found</h1>`
            },
            mode: 'history'
        });
    }

    render() {
        return html`
            <my-header></my-header>
            <main id="outlet"></main>
        `;
    }
}
