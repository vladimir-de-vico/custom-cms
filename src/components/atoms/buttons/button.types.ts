import type { HTMLAttributes } from 'react';
import type {
    Button as AriaButton,
    ButtonProps as AriaButtonProps,
    ToggleButton as AriaToggleButton,
    ToggleButtonProps as AriaToggleButtonProps,
} from 'react-aria-components';
import type { AppLink } from '@/core/app-link';
import type { BUTTON_COMPONENTS } from './__index__';

export type ToggleButtonProps = AriaToggleButtonProps;
export type ButtonComponents = typeof BUTTON_COMPONENTS;
export type ButtonComponentsKeys = keyof ButtonComponents;
export type ButtonTag = typeof AriaButton | typeof AriaToggleButton | typeof AppLink | 'button';
export type ButtonPropsInternal<T extends ButtonComponentsKeys> = {
    variant?: T | (string & {});
    Tag?: ButtonTag;
} & Omit<React.ComponentProps<ButtonComponents[T]>, 'variant' | 'Tag'> &
    HTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
    Tag: ButtonTag;
    children: React.ReactNode;
    className?: string;
    slot?: string | undefined;
    variant?: ButtonComponentsKeys | (string & {});
} & AriaButtonProps;

export type ButtonLinkProps<T extends ButtonComponentsKeys> = Omit<ButtonPropsInternal<T>, 'Tag'>;
