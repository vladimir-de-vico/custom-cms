/**
 * Props di stile condivise tra tutti i "style components" dei bottoni.
 *
 * Queste props NON definiscono il tipo di host (button, link, toggle),
 * ma solo aspetti comuni come className e children. Vengono combinate con
 * le props specifiche del Tag effettivo tramite {@link PolymorphicProps}.
 *
 * @property className Classe CSS aggiuntiva da concatenare alle classi di stile del componente.
 * @property children Contenuto del bottone (testo, icone, ecc.).
 */
export type CommonStyleProps = {
    className?: string;
    children?: React.ReactNode;
};

/**
 * Helper per creare componenti **polimorfici** (pattern "as/Tag").
 *
 * Dato un `Tag` (ElementType) e delle prop "proprietarie" `Own`, costruisce:
 * - le prop specifiche del Tag (`ComponentProps<C>`) meno quelle in conflitto
 * - le `CommonStyleProps` condivise
 * - le prop "proprietarie" `Own` (es. leadingIcon, trailingIcon)
 * - la prop opzionale `Tag` per fare override dell'host (es. 'a', 'button', AppLink, ToggleButton, ...)
 *
 * In pratica, questo permette a una variante (es. `Primary`) di funzionare con host diversi,
 * mantenendo l'intellisense corretto: se `Tag='a'`, suggerirà `href`, `target`, ecc.;
 * se `Tag` è un ToggleButton, suggerirà `isSelected`, `onChange`, ecc.
 *
 * @template C ElementType del Tag/host (es. 'button' | 'a' | AppLink | ToggleButton...).
 * @template Own Props "proprietarie" della variante (aggiunte sopra alle props del Tag).
 */
export type PolymorphicProps<C extends React.ElementType, Own extends {} = {}> = Own &
    CommonStyleProps &
    Omit<React.ComponentProps<C>, keyof Own | keyof CommonStyleProps> & {
        /**
         * Override opzionale del Tag/host da usare per il render.
         * Se non fornito, il componente di stile userà il proprio default (es. 'button' o 'a').
         */
        Tag?: C;
    };
