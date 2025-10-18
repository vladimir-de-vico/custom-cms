import { cx } from 'class-variance-authority';
import type { IconProps } from '@/components/atoms/icon/icon.types';
import type { ButtonProps } from '../button.types';

type DefaultButtonProps = ButtonProps & {
    leadingIcon: IconProps;
};

export function Default({ Tag, className, leadingIcon, trailingIcon }: DefaultButtonProps) {
    return <Tag className={cx(className)}></Tag>;
}
