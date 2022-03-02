(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lit'), require('lit/decorators.js')) :
    typeof define === 'function' && define.amd ? define(['exports', 'lit', 'lit/decorators.js'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.myButton = {}, global.lit, global.decorators_js));
})(this, (function (exports, lit, decorators_js) { 'use strict';

    var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    exports.DialogBoxButton = class DialogBoxButton extends lit.LitElement {
        constructor() {
            super(...arguments);
            // Boolean regarding if the dialog box should be visible
            this.boxHidden = true;
            // confirming if submission is being triggered
            this.isSubmitted = false;
            // Customization for the name on the button; "open" is default
            this.btnName = "open";
            // customization for the type of button; "button" is default
            this.typeName = "button";
        }
        // button template to be added to the render
        _buttonTemplate() {
            return lit.html `
            <button @click="${this._buttonNameHandler}" type="${this.typeName}" name="${this.btnName}">
                ${this.btnName}
            </button>
        `;
        }
        // toggle to hide/show dialog-box custom component
        _clickHandler() {
            this.boxHidden = !this.boxHidden;
            if (this.boxHidden) {
                this.btnName = "open";
            }
            else {
                this.btnName = "close";
            }
        }
        // handler to deal with the different button functionalities, depending on the name given
        _buttonNameHandler() {
            // should confirm submission of the form
            if (this.btnName === "confirm") {
                this.isSubmitted = true;
            }
            // should reset the component to it's initial state, thus closing it
            else if (this.btnName === "cancel") {
                this.boxHidden = true;
                console.log(this.boxHidden);
            }
            // should hide/reveal the dialog-box
            else {
                this._clickHandler();
            }
        }
        // print to HTML
        render() {
            return lit.html `
            ${this._buttonTemplate()}
            ${!this.boxHidden ? lit.html `<slot></slot>` : lit.html ``}
        `;
        }
    };
    // Stylization of button component
    exports.DialogBoxButton.styles = lit.css `
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
        decorators_js.property({ type: Boolean })
    ], exports.DialogBoxButton.prototype, "boxHidden", void 0);
    __decorate([
        decorators_js.property({ attribute: 'btn-name' })
    ], exports.DialogBoxButton.prototype, "btnName", void 0);
    __decorate([
        decorators_js.property({ attribute: 'type' })
    ], exports.DialogBoxButton.prototype, "typeName", void 0);
    exports.DialogBoxButton = __decorate([
        decorators_js.customElement('dialog-box-button')
    ], exports.DialogBoxButton);

    Object.defineProperty(exports, '__esModule', { value: true });

}));
