import type { Url } from 'next/dist/shared/lib/router/router';
import type { LinkProps as NextLinkProps } from 'next/link';

export type NextLinkWrapperProps = {
    ref?: React.RefObject<HTMLAnchorElement>;
    children?: React.ReactNode;
    target?: React.HTMLAttributeAnchorTarget;
    className?: string;
    href: Url;
} & Omit<NextLinkProps, 'href'>;

export type NextLinkOpensInNewWindowProps = {
    target: React.HTMLAttributeAnchorTarget;
    label: string;
};
