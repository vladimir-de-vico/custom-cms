'use client';

import { cx } from 'class-variance-authority';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';
import { mergeRefs } from 'react-merge-refs';
import type { NextLinkOpensInNewWindowProps, NextLinkWrapperProps } from './next-link-wrapper.types';

export function NextLinkOpensInNewWindow({ target, label }: NextLinkOpensInNewWindowProps) {
    return target === '_blank' && <span className='sr-only'>{label}</span>;
}

export function NextLinkWrapper(props: NextLinkWrapperProps) {
    const { ref, children, href, target, className, onClick, ...rest } = props;
    const pathname = usePathname();
    const active = false && pathname === href;

    const localRef = useRef<HTMLAnchorElement>(null);

    // TODO: Replace when translations are available
    const opens_in_new_window = '(Opens in new window)';

    if (href && href !== '/' && typeof href === 'string' && !/^\/[^/]/.test(href)) {
        return (
            <a
                className={className}
                href={href}
                onClick={onClick}
                ref={mergeRefs([localRef, ref])}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                tabIndex={0}
                target={target}
                {...rest}
            >
                {children} {target === '_blank' && <span className='sr-only'>{opens_in_new_window}</span>}
            </a>
        );
    }

    return (
        <NextLink
            aria-current={pathname === href}
            className={cx(active ? 'pointer-events-none' : undefined, className)}
            href={href}
            onClick={(e) => {
                if (active) {
                    e.preventDefault();
                }
                onClick?.(e);
            }}
            prefetch={false}
            ref={mergeRefs([localRef, ref])}
            scroll={false}
            tabIndex={0}
            target={target}
            {...rest}
        >
            {children}
        </NextLink>
    );
}
