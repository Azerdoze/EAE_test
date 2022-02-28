import { LitElement,css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('dialog-box-button')
export class DialogBoxButton extends LitElement{

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
    @property({type:Boolean}) 
    openWindow = true;
    
    // Customization for the name on the button; "open" is default
    @property({attribute: 'btn-name'})
    btnName = "open";

    @property({attribute: 'type'})
    type="button";

    // button template to be added to the render
    buttonTemplate() {
        return html`
            <button @click="${this._buttonNameHandler}">
                ${this.btnName}
            </button>
        `
    }

    // toggle to hide/show dialog box
    _clickHandler() {
        this.openWindow = !this.openWindow;
        if(this.openWindow) {
            this.btnName = "open";
        } else {
            this.btnName = "close";
        }
    }
    
    // handler to deal with the different button functionalities
    _buttonNameHandler() {
        if(this.btnName === "confirm") {
            console.log(this)
        }
        if(this.btnName === "cancel") {
            this.openWindow = !this.openWindow;
        }
        if(this.btnName === "open" || "close") {
           this._clickHandler();
        }
    }

    // render to print to HTML
    override render() {
        return html`
            ${this.buttonTemplate()}
            ${!this.openWindow ? html`<slot></slot>` : html``}
        `;
    }
}