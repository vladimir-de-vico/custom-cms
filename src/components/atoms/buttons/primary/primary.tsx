import { cx } from 'class-variance-authority';
import type { ElementType } from 'react';
import { Icon } from '@/components/atoms/icon/icon';
import type { IconProps } from '@/components/atoms/icon/icon.types';
import type { PolymorphicProps } from '../polymorphic';
import styles from './primary.module.css';

type PrimaryProps = {
    leadingIcon?: IconProps;
    trailingIcon?: IconProps;
};

export function Primary<C extends ElementType = 'button'>({
    Tag,
    children,
    className,
    leadingIcon,
    trailingIcon,
    ...rest
}: PolymorphicProps<C, PrimaryProps>) {
    const T = (Tag ?? 'button') as C;
    return (
        <T
            className={cx(styles.container, className)}
            {...(rest as any)}
        >
            {leadingIcon && <Icon {...leadingIcon} />}
            {children}
            {trailingIcon && <Icon {...trailingIcon} />}
        </T>
    );
}
