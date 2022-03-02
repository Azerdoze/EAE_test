var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let DialogBox = class DialogBox extends LitElement {
    constructor() {
        var _a, _b;
        super(...arguments);
        this.cancelBtn = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('cancel');
        this.confirmBtn = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('confirm');
        this.boxHidden = true;
    }
    open() {
        this.setAttribute('opened', '');
        this.boxHidden = false;
    }
    close() {
        if (this.hasAttribute('opened')) {
            this.removeAttribute('opened');
        }
        this.boxHidden = true;
    }
    _cancel() {
        var _a, _b;
        this.close();
        const cancelEvent = new Event('cancel');
        this.dispatchEvent(cancelEvent);
        (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById('dialog-form')) === null || _b === void 0 ? void 0 : _b.reset();
        console.log('cancel');
    }
    _confirm() {
        this.close();
        const confirmEvent = new Event('confirm');
        this.dispatchEvent(confirmEvent);
        console.log('confirm');
        // this.shadowRoot?.getElementById('dialog-form')?.submit();
    }
    render() {
        return html `
      <div class="dialog-box-container">
        <form action="" id="dialog-form">
          <div class="text-container">
            <h1>
              <input
                type="text"
                id="dbtitle"
                name="dbtitle"
                placeholder="Title"
              />
            </h1>
            <textarea
              id="dbdescription"
              name="dbdescription"
              rows="5"
              cols="53"
              placeholder="Description"
            ></textarea>
            <slot></slot>
          </div>
          <div class="buttons-container">
            <dialog-box-button btn-name="cancel"></dialog-box-button>
            <dialog-box-button btn-name="confirm"></dialog-box-button>
          </div>
        </form>
      </div>
    `;
    }
};
DialogBox.styles = css `
    .dialog-box-container {
      margin: 1rem;
      box-shadow: 0px 0px 5px 5px lightgray;
      border-radius: 15px;
      width: 428px;
      display: none;
    }
    :host([opened]) .dialog-box-container {
      display: block;
    }
    .text-container {
      padding: 0.5rem;
      font-family: sans-serif;
    }
    .text-container h1 {
      margin: 0;
      border-bottom: 1px solid black;
    }
    .text-container h1 input {
      margin: 0.5rem 0;
      font-size: large;
    }
    .text-container textarea {
      margin-top: 0.5rem;
    }
    .buttons-container {
      display: flex;
      justify-content: space-around;
      padding-bottom: 1rem;
    }
  `;
__decorate([
    property({ type: Boolean })
], DialogBox.prototype, "boxHidden", void 0);
DialogBox = __decorate([
    customElement('dialog-box')
], DialogBox);
export { DialogBox };
//# sourceMappingURL=dialog-box.js.map