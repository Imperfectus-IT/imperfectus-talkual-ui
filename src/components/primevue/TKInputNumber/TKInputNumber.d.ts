import { ButtonHTMLAttributes, InputHTMLAttributes, VNode } from 'vue';

export declare type TKInputNumberPassThroughOptionType<T = any> = TKInputNumberPassThroughAttributes | ((options: TKInputNumberPassThroughMethodOptions<T>) => TKInputNumberPassThroughAttributes | string) | string | null | undefined;

export interface TKInputNumberPassThroughMethodOptions<T> {
    instance: any;
    props: TKInputNumberProps;
    state: TKInputNumberState;
    parent: T;
    global: object | undefined;
}

export interface TKInputNumberSharedPassThroughMethodOptions {
    props: TKInputNumberProps;
    state: TKInputNumberState;
}

export interface TKInputNumberInputEvent {
    originalEvent: Event;
    value: string | number | undefined;
}

export interface TKInputNumberBlurEvent {
    originalEvent: Event;
    value: string;
}

export interface TKInputNumberPassThroughOptions<T = any> {
    root?: TKInputNumberPassThroughOptionType<T>;
    input?: InputTextPassThroughOptions<TKInputNumberSharedPassThroughMethodOptions>;
    buttonGroup?: TKInputNumberPassThroughOptionType<T>;
    incrementButton?: ButtonPassThroughOptions<TKInputNumberSharedPassThroughMethodOptions>;
    decrementButton?: ButtonPassThroughOptions<TKInputNumberSharedPassThroughMethodOptions>;
    hooks?: ComponentHooks;
}

export interface TKInputNumberPassThroughAttributes {
    [key: string]: any;
}

export interface TKInputNumberState {
    d_modelValue: number;
    focused: boolean;
}

export interface TKInputNumberProps {
    modelValue?: Nullable<number>;

    format?: boolean | undefined;

    showButtons?: boolean | undefined;

    buttonLayout?: 'stacked' | 'horizontal' | 'vertical' | undefined;

    incrementButtonClass?: string | undefined;

    decrementButtonClass?: string | undefined;

    incrementButtonIcon?: string | undefined;

    decrementButtonIcon?: string | undefined;

    locale?: string | undefined;

    localeMatcher?: 'lookup' | 'best fit' | undefined;

    mode?: 'decimal' | 'currency' | undefined;

    prefix?: string | undefined;

    suffix?: string | undefined;

    currency?: string | undefined;

    currencyDisplay?: string | undefined;

    useGrouping?: boolean | undefined;

    minFractionDigits?: number | undefined;

    maxFractionDigits?: number | undefined;

    min?: number | undefined;

    max?: number | undefined;

    step?: number | undefined;

    allowEmpty?: boolean | undefined;

    highlightOnFocus?: boolean | undefined;

    disabled?: boolean | undefined;

    readonly?: boolean | undefined;

    placeholder?: string | undefined;

    inputId?: string | undefined;

    inputClass?: string | object | undefined;

    inputStyle?: object | undefined;

    inputProps?: InputHTMLAttributes | undefined;

    incrementButtonProps?: ButtonHTMLAttributes | undefined;

    decrementButtonProps?: ButtonHTMLAttributes | undefined;

    ariaLabelledby?: string | undefined;

    ariaLabel?: string | undefined;

    pt?: PassThrough<TKInputNumberPassThroughOptions>;

    ptOptions?: PassThroughOptions;

    unstyled?: boolean;
}

export interface TKInputNumberSlots {
    incrementbuttonicon(): VNode[];
    decrementbuttonicon(): VNode[];
}

export interface TKInputNumberEmits {
    'update:modelValue'(value: number): void;

    input(event: TKInputNumberInputEvent): void;

    focus(event: Event): void;

    blur(event: TKInputNumberBlurEvent): void;
}


