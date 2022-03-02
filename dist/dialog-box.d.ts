import { LitElement } from 'lit';
export declare class DialogBox extends LitElement {
    static styles: import("lit").CSSResult;
    cancelBtn: Element | null | undefined;
    confirmBtn: Element | null | undefined;
    boxHidden: boolean;
    open(): void;
    close(): void;
    _cancel(): void;
    _confirm(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'dialog-box': DialogBox;
    }
}
//# sourceMappingURL=dialog-box.d.ts.map