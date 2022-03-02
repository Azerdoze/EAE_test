var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
const dialogBox = document.querySelector('dialog-box');
const dialogBoxBtn = document.querySelector('dialog-box-button');
let DialogBoxButton = class DialogBoxButton extends LitElement {
    constructor() {
        super(...arguments);
        // Boolean regarding if the dialog box should be visible
        this.boxHidden = true;
        // confirming if submission is being triggered
        this.isSubmitted = false;
        // Customization for the name on the button; "open" is default
        this.btnName = 'open';
    }
    // button template to be added to the render
    _buttonTemplate() {
        return html `
      <button
        @click="${this.buttonCall}"
        name="${this.btnName}"
        id="${this.btnName}"
      >
        ${this.btnName}
      </button>
    `;
    }
    buttonCall() {
        if (this.btnName === "open") {
            dialogBox === null || dialogBox === void 0 ? void 0 : dialogBox.open();
            console.log(this.btnName);
            this.btnName = "close";
        }
        else if (this.btnName === "close") {
            dialogBox === null || dialogBox === void 0 ? void 0 : dialogBox.close();
            this.btnName = "open";
        }
        else if (this.btnName === "cancel") {
            dialogBox === null || dialogBox === void 0 ? void 0 : dialogBox._cancel();
            dialogBoxBtn.btnName = "open";
        }
        else if (this.btnName === "confirm") {
            dialogBox === null || dialogBox === void 0 ? void 0 : dialogBox._confirm();
            dialogBoxBtn.btnName = "open";
        }
    }
    // print to HTML
    render() {
        return html ` ${this._buttonTemplate()} `;
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
], DialogBoxButton.prototype, "boxHidden", void 0);
__decorate([
    property({ attribute: 'btn-name' })
], DialogBoxButton.prototype, "btnName", void 0);
DialogBoxButton = __decorate([
    customElement('dialog-box-button')
], DialogBoxButton);
export { DialogBoxButton };
//# sourceMappingURL=dialog-box-button.js.map