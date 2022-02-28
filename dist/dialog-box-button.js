var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let DialogBoxButton = class DialogBoxButton extends LitElement {
    constructor() {
        super(...arguments);
        // Boolean regarding if the dialog box should be visible
        this.openWindow = true;
        // Customization for the name on the button; "open" is default
        this.btnName = "open";
        this.type = "button";
    }
    // button template to be added to the render
    buttonTemplate() {
        return html `
            <button @click="${this._buttonNameHandler}">
                ${this.btnName}
            </button>
        `;
    }
    // toggle to hide/show dialog box
    _clickHandler() {
        this.openWindow = !this.openWindow;
        if (this.openWindow) {
            this.btnName = "open";
        }
        else {
            this.btnName = "close";
        }
    }
    // handler to deal with the different button functionalities
    _buttonNameHandler() {
        if (this.btnName === "confirm") {
            console.log(this);
        }
        if (this.btnName === "cancel") {
            this.openWindow = !this.openWindow;
        }
        if (this.btnName === "open" || "close") {
            this._clickHandler();
        }
    }
    // render to print to HTML
    render() {
        return html `
            ${this.buttonTemplate()}
            ${!this.openWindow ? html `<slot></slot>` : html ``}
        `;
    }
};
// Stylization of button component
DialogBoxButton.styles = css `
        button {
            color: black;
            background-color: lightgray;
            padding: 0.5rem 2rem;
            font-family: sans-serif;
            font-weight: bold;
            text-transform: uppercase;
            border: 1px solid darkgray;
            border-radius: 15px;
            cursor: pointer;
        }
        button:hover {
                background-color: darkgreen;
                color: lightgray;
            }
    `;
__decorate([
    property({ type: Boolean })
], DialogBoxButton.prototype, "openWindow", void 0);
__decorate([
    property({ attribute: 'btn-name' })
], DialogBoxButton.prototype, "btnName", void 0);
__decorate([
    property({ attribute: 'type' })
], DialogBoxButton.prototype, "type", void 0);
DialogBoxButton = __decorate([
    customElement('dialog-box-button')
], DialogBoxButton);
export { DialogBoxButton };
//# sourceMappingURL=dialog-box-button.js.map