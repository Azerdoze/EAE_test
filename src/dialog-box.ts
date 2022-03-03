import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('dialog-box')
export class DialogBox extends LitElement {
  // stylization of the custom element
  static override styles = css`
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

  // variables that fetch the buttons made by the shadowroot
  cancelBtn = this.shadowRoot?.querySelector('cancel');

  confirmBtn = this.shadowRoot?.querySelector('confirm');

// Boolean regarding if the dialog box should be visible
  @property({type: Boolean})
  boxHidden = true;

  // method to open the chat box (to be used by the box-button)
  open() {
    this.setAttribute('opened', '');
    this.boxHidden = false;
  }
  
  // method to close the chat box (to be used by the box-button)
  close() {
    if (this.hasAttribute('opened')) {
      this.removeAttribute('opened');
    }
    this.boxHidden = true;
  }
  
  // method to reset the inputs of the the chat box and close it (to be used by the box-button)
  _cancel() {
    this.close();
    const cancelEvent = new Event('cancel');
    this.dispatchEvent(cancelEvent);
    this.shadowRoot?.getElementById('dialog-form')?.reset();
    console.log('cancel');
  }
  
  // method to submit the inputs of the the chat box and close it (to be used by the box-button)
  _confirm() {
    this.close();
    const confirmEvent = new Event('confirm');
    this.dispatchEvent(confirmEvent);
    console.log('confirm');
    this.shadowRoot?.getElementById('dialog-form')?.submit();
  }

  // print to HTML
  override render() {
    return html`
      <div class="dialog-box-container">
        <form id="dialog-form">
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
}

declare global {
  interface HTMLElementTagNameMap {
    'dialog-box': DialogBox;
  }
}
