import { Button as AriaButton } from 'react-aria-components';
import type { LinkProps } from 'storybook/internal/router';
import { AppLink } from '@/core/app-link';
import { BUTTON_COMPONENTS } from './__index__';
import type { ButtonComponentsKeys, ButtonLinkProps, ButtonPropsInternal } from './button.types';

export function Button<T extends ButtonComponentsKeys>({ variant, Tag: TagProp, ...rest }: ButtonPropsInternal<T>) {
    const Tag = TagProp || AriaButton;

    const props = {
        Tag: Tag,
        type: (Tag === 'button' ? 'button' : undefined) as HTMLButtonElement['type'],
        ...rest,
    };

    const Component = BUTTON_COMPONENTS[(variant || 'default') as ButtonComponentsKeys];
    return <Component {...props} />;
}

export function ButtonLink<T extends ButtonComponentsKeys>({ children, ...rest }: ButtonLinkProps<T> & LinkProps) {
    return (
        <Button
            Tag={AppLink}
            {...rest}
        >
            {children}
        </Button>
    );
}
