import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

const dialogBox = document.querySelector('dialog-box');
const dialogBoxBtn = document.querySelector('dialog-box-button');

@customElement('dialog-box-button')
export class DialogBoxButton extends LitElement {
  // Stylization of button component
  static override styles = css`
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

  // Boolean regarding if the dialog box should be visible
  @property({type: Boolean})
  boxHidden = true;

  // confirming if submission is being triggered
  isSubmitted = false;

  // Customization for the name on the button; "open" is default
  @property({attribute: 'btn-name'})
  btnName = 'open';

  // button template to be added to the render
  _buttonTemplate() {
    return html`
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
      dialogBox?.open();
      console.log(this.btnName)
      this.btnName = "close";
    }
    else if (this.btnName === "close") {
        dialogBox?.close();
        this.btnName = "open";
    }
    else if (this.btnName === "cancel") {
        dialogBox?._cancel();
        dialogBoxBtn.btnName = "open";
        
    }
    else if (this.btnName === "confirm") {
        dialogBox?._confirm();
        dialogBoxBtn.btnName = "open";
    }
    }

  // print to HTML
  override render() {
    return html` ${this._buttonTemplate()} `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dialog-box-button': DialogBoxButton;
  }
}
