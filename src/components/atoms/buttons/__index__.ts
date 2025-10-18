import { Primary } from './primary/primary';

/**
 * Mappa delle varianti di stile → componente di stile.
 *
 * Ogni valore della mappa è un "style component" **polimorfico** (es. `Primary`),
 * ovvero un componente che prende un `Tag` e propaga le props del Tag effettivo.
 *
 * Questa mappa viene usata per costruire una **union discriminata** su `variant`
 * (vedi `ButtonAllProps`), così quando scrivi `variant="primary"` TypeScript restringe
 * automaticamente le props a quelle dello stile scelto.
 *
 * Suggerimenti:
 * - Mantieni le chiavi stabili e in minuscolo (`'primary'`, `'link'`, `'icon'`, ...).
 * - Aggiungi qui nuove varianti quando crei nuovi "style components".
 *
 * Esempio:
 * ```tsx
 * const Comp = BUTTON_COMPONENTS[variant]; // restituisce lo style component corretto
 * return <Comp Tag={AriaButton} {...rest} />;
 * ```
 */
export const BUTTON_COMPONENTS = {
    primary: Primary,
};
