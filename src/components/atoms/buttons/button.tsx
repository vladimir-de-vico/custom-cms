'use client';
import type { ComponentProps, ElementType, JSX } from 'react';
import {
    Button as AriaButton,
    type ButtonProps as AriaButtonProps,
    ToggleButton as AriaToggleButton,
} from 'react-aria-components';
import { AppLink, type AppLinkProps } from '@/core/app-link';
import { BUTTON_COMPONENTS } from './__index__';
import type { ButtonAllProps } from './button.types';

/**
 * Entry-point per i bottoni "normali" basati su `react-aria-components` `<Button>`.
 *
 * - Usa come Tag di default `AriaButton` (react-aria). Puoi fare override passando `Tag`.
 * - Accetta una `variant` (chiave di `BUTTON_COMPONENTS`) che determina lo **style component** usato.
 * - Le props vengono **restringe automaticamente** in base alla `variant` (union discriminata).
 * - In più, eredita le props di `AriaButton` (es. `onPress`, `isDisabled`, ...).
 *
 * Comportamenti:
 * - Se il Tag effettivo è la stringa `'button'`, aggiunge automaticamente `type="button"` per evitare
 *   submit indesiderati nei form.
 *
 * @param props Union discriminata in base a `variant` + props di `AriaButton`. `Tag` è opzionale.
 * @returns JSX.Element
 *
 * @example Bottone primario con onPress
 * ```tsx
 * <Button variant="primary" onPress={() => console.log('click')}>
 *   Invia
 * </Button>
 * ```
 *
 * @example Override del Tag
 * ```tsx
 * <Button variant="primary" Tag="button">Native button</Button>
 * ```
 */
export function Button(props: ButtonAllProps & { Tag?: ElementType } & AriaButtonProps): JSX.Element {
    const { variant, Tag: TagProp, ...rest } = props as ButtonAllProps & { Tag?: ElementType };
    const Comp = BUTTON_COMPONENTS[variant];
    const Tag = (TagProp ?? AriaButton) as ElementType;

    const maybeType = typeof Tag === 'string' && Tag === 'button' ? { type: 'button' as const } : {};

    return (
        <Comp
            Tag={Tag}
            {...maybeType}
            {...(rest as any)}
        />
    );
}

/**
 * Entry-point per i bottoni **toggle** basati su `react-aria-components` `<ToggleButton>`.
 *
 * - Usa come Tag di default `AriaToggleButton`. Puoi fare override passando `Tag`.
 * - Accetta una `variant` (chiave di `BUTTON_COMPONENTS`) che determina lo **style component** usato.
 * - Le props vengono **restringe automaticamente** in base alla `variant`.
 * - In più, eredita le props di `ToggleButton` (es. `isSelected`, `onChange`, ...).
 *
 * @param props Union discriminata in base a `variant` + props di `AriaToggleButton`. `Tag` è opzionale.
 * @returns JSX.Element
 *
 * @example Toggle primario controllato
 * ```tsx
 * <ButtonToggle
 *   variant="primary"
 *   isSelected={isFav}
 *   onChange={setIsFav}
 * >
 *   Preferito
 * </ButtonToggle>
 * ```
 */
export function ButtonToggle(props: ButtonAllProps & ComponentProps<typeof AriaToggleButton>): JSX.Element {
    const { variant, Tag: TagProp, ...rest } = props as ButtonAllProps & { Tag?: ElementType };
    const Comp = BUTTON_COMPONENTS[variant];
    const Tag = (TagProp ?? AriaToggleButton) as ElementType;
    return (
        <Comp
            Tag={Tag}
            {...(rest as any)}
        />
    );
}

/**
 * Entry-point per i bottoni **link** basati su `AppLink` (o anchor `<a>`).
 *
 * - Usa come Tag di default `AppLink`. Puoi fare override passando `Tag` (es. `'a'`).
 * - Accetta una `variant` (chiave di `BUTTON_COMPONENTS`) che determina lo **style component** usato.
 * - Le props vengono **restringe automaticamente** in base alla `variant`.
 * - In più, eredita le props di `AppLink` (es. `href`, `target`, `prefetch`, ...).
 *
 * @param props Union discriminata in base a `variant` + props di `AppLink`. `Tag` è opzionale.
 * @returns JSX.Element
 *
 * @example Link primario interno
 * ```tsx
 * <ButtonLink variant="primary" href="/docs">
 *   Vai alla documentazione
 * </ButtonLink>
 * ```
 *
 * @example Link esterno con <a>
 * ```tsx
 * <ButtonLink variant="primary" Tag="a" href="https://example.com" target="_blank" rel="noreferrer">
 *   Sito esterno
 * </ButtonLink>
 * ```
 */
export function ButtonLink(props: ButtonAllProps & AppLinkProps): JSX.Element {
    const { variant, Tag: TagProp, ...rest } = props as ButtonAllProps & { Tag?: ElementType };
    const Comp = BUTTON_COMPONENTS[variant];
    const Tag = (TagProp ?? AppLink) as ElementType;
    return (
        <Comp
            Tag={Tag}
            {...(rest as any)}
        />
    );
}
