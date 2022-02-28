import { LitElement,css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { DialogBoxButton } from './dialog-box-button';

@customElement('dialog-box')
export class DialogBox extends LitElement {
    static override styles = css`
        .dialog-box-container {
            margin: 1rem;
            box-shadow: 0px 0px 5px 5px lightgray;
            border-radius: 15px;
            width: 30vw;
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

    

    override render() {
        return html`
        <div class="dialog-box-container">
            <form action="">
                <div class="text-container">
                    <h1><input type="text" id="dbtitle" name="dbtitle" placeholder="Title" /></h1>
                    <textarea id="dbdescription" name="dbdescription" rows="5" cols="53" placeholder="Description"></textarea>
                    <slot></slot>
                </div>
                <div class="buttons-container">
                    <dialog-box-button type="reset" btn-name="cancel"></dialog-box-button>
                    <dialog-box-button type="submit" btn-name="confirm"></dialog-box-button>
                </div>
            </form>
        </div>
        `
    }
}