import { LitElement } from 'lit';
export declare class DialogBoxButton extends LitElement {
    static styles: import("lit").CSSResult;
    boxHidden: boolean;
    isSubmitted: boolean;
    btnName: string;
    _buttonTemplate(): import("lit-html").TemplateResult<1>;
    buttonCall(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'dialog-box-button': DialogBoxButton;
    }
}
//# sourceMappingURL=dialog-box-button.d.ts.map