import { cx } from 'class-variance-authority';
import iconSprite from '@/styles/icons.svg';

import styles from './icon.module.css';
import type { IconProps } from './icon.types';

const sprites = {
    icons: iconSprite.src,
};

export function Icon({ name, set = 'icons', 'aria-label': ariaLabel, size = 'md', className }: IconProps) {
    return (
        <svg
            aria-label={ariaLabel}
            className={cx(styles.base, styles[size], className)}
        >
            <title>{name}</title>
            <use href={`${sprites[set]}#${name}`} />
        </svg>
    );
}
