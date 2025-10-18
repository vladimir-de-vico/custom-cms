import type { ComponentProps, ElementType } from 'react';
import type { BUTTON_COMPONENTS } from './__index__';

export type Keys = keyof typeof BUTTON_COMPONENTS;
export type ComponentOf<K extends Keys> = (typeof BUTTON_COMPONENTS)[K];
export type PropsOf<K extends Keys> = ComponentProps<ComponentOf<K>>;

/**
 * Union **discriminata** delle props per i wrapper `Button`, `ButtonToggle`, `ButtonLink`.
 *
 * È costruita dinamicamente dalla mappa `BUTTON_COMPONENTS`:
 * per ogni chiave `variant` si prendono le props del relativo *style component*,
 * rimuovendo la prop `Tag` (gestita dai wrapper) e aggiungendo la discriminante `{ variant: K }`.
 *
 * Risultato: quando scrivi `<Button variant="primary" ...>`, l'editor conosce
 * esattamente quali props accetta lo stile "primary" (in aggiunta alle props del Tag default del wrapper).
 *
 * Esempio:
 * ```tsx
 * // variant="primary" restringe le props allo style Primary
 * <Button variant="primary" onPress={...}>OK</Button>
 *
 * // variant="link" con wrapper ButtonLink restringe a props da link (href, target, ...)
 * <ButtonLink variant="link" href="/docs">Docs</ButtonLink>
 * ```
 *
 * @example Narrowing automatico per variante
 * ```tsx
 * function Demo() {
 *   return (
 *     <>
 *       <Button variant="primary">Invia</Button>
 *       <ButtonToggle variant="switch" isSelected onChange={setSel}>Toggle</ButtonToggle>
 *       <ButtonLink variant="menuLink" href="/">Home</ButtonLink>
 *     </>
 *   );
 * }
 * ```
 */
export type ButtonAllProps = {
    [K in Keys]: { variant: K } & Omit<PropsOf<K>, 'Tag'> & { Tag?: ElementType };
}[Keys];
