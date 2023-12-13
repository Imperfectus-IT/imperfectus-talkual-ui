import { ButtonHTMLAttributes } from 'vue';

export interface TKButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {
    style?: any;
    class?: any;
    label?: string | undefined;
    icon?: string | undefined;
    iconPos?: 'left' | 'right' | 'top' | 'bottom' | undefined;
    iconClass?: string | undefined;
    badge?: string | undefined;
    badgeClass?: string | undefined;
    badgeSeverity?: 'info' | 'success' | 'warning' | 'danger' | string | null | undefined;
    loading?: boolean | undefined;
    loadingIcon?: string | undefined;
    link?: boolean | undefined;
    severity?: 'secondary' | 'success' | 'info' | 'warning' | 'help' | 'danger' | string | undefined;
    raised?: boolean | undefined;
    rounded?: boolean | undefined;
    text?: boolean | undefined;
    outlined?: boolean | undefined;
    size?: 'small' | 'large' | undefined;
    plain?: boolean | undefined;
    pt?: any;
    ptOptions?: any;
    unstyled?: boolean;
}
/**
 * Defines valid slots in Button component.
 */
export interface TKButtonSlots {
    /**
     * Custom content such as icons, images and text can be placed inside the button via the default slot. Note that when slot is used, label, icon and badge properties are not included.
     */
    default(): VNode[];
    /**
     * Custom icon template.
     * @param {Object} scope - icon slot's params.
     */
    icon(scope: {
        /**
         * Style class of the icon.
         */
        class: string;
    }): VNode[];
    /**
     * Custom loading icon template.
     * @param {Object} scope - loading icon slot's params.
     */
    loadingicon(scope: {
        /**
         * Style class of the loading icon.
         */
        class: string;
    }): VNode[];
}
