
import { InputHTMLAttributes } from 'vue';

export declare type TKInputTextPassThroughOptionType<T = any> = TKInputTextPassThroughAttributes | ((options: TKInputTextPassThroughMethodOptions<T>) => TKInputTextPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface TKInputTextPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in TKInputText component.
 */
export interface TKInputTextProps extends /* @vue-ignore */ InputHTMLAttributes {
    /**
     * Value of the component.
     */
    modelValue?: Nullable<string>;
    /**
     * Defines the size of the component.
     */
    size?: 'small' | 'large' | undefined;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {TKInputTextPassThroughOptions}
     */
    pt?: PassThrough<TKInputTextPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines valid slots in TKInputText component.
 */
export interface TKInputTextSlots {}

/**
 * Defines valid emits in TKInputText component.
 */
export interface TKInputTextEmits {
    /**
     * Emitted when the value changes.
     * @param {string} value - New value.
     */
    'update:modelValue'(value: string | undefined): void;
}
