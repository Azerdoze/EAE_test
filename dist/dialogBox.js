(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lit'), require('lit/decorators.js')) :
    typeof define === 'function' && define.amd ? define(['exports', 'lit', 'lit/decorators.js'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.dialogBox = {}, global.lit, global.decorators_js));
})(this, (function (exports, lit, decorators_js) { 'use strict';

    var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    exports.DialogBox = class DialogBox extends lit.LitElement {
        render() {
            return lit.html `
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
        `;
        }
    };
    exports.DialogBox.styles = lit.css `
        .dialog-box-container {
            margin: 1rem;
            box-shadow: 0px 0px 5px 5px lightgray;
            border-radius: 15px;
            width: 428px;
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
    exports.DialogBox = __decorate([
        decorators_js.customElement('dialog-box')
    ], exports.DialogBox);

    Object.defineProperty(exports, '__esModule', { value: true });

}));
