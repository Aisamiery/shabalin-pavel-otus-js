/**
 * Author: Shabalin Pavel
 * Email: aisamiery@gmail.com
 */

import { LitElement, html } from 'lit-element';

class MyLeaf extends LitElement {
    static get properties() {
        return {
            item: { type: Object }
        };
    }

    constructor(){
        super();
    }

    createRenderRoot() {
        return this;
    }

    render() {
        return html`
          <ul>
            <li>${this.item.name}</li>
            ${
                Array.isArray(this.item.items) ?
                    html`<my-tree items="${JSON.stringify(this.item.items)}"></my-tree>`
                    :
                    ''
            }
          </ul>
        `;
    }
}

class MyTree extends LitElement {
    static get properties() {
        return {
            items: { type: Array }
        };
    }

    constructor(){
        super();
    }

    createRenderRoot() {
        return this;
    }

    render() {
        return html`
          ${this.items.map(item => html`<my-leaf item="${JSON.stringify(item)}"></my-leaf>`)}
        `;
    }
}

customElements.define('my-leaf', MyLeaf);
customElements.define('my-tree', MyTree);