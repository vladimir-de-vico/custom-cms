import type { SpriteSymbol as IconSymbols } from '@/styles/icons-symbols';

export type CommonIconProps = {
    'aria-label'?: string;
    size: 'sm' | 'md' | 'lg';
    className?: string;
};
export type IconSets = 'icons';
export type IconsProps = CommonIconProps & {
    name: IconSymbols;
    set?: IconSets;
};
export type IconProps = IconsProps;
