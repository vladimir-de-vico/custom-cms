export const SYMBOLS = [
    'ChevronUp',
    'ChevronDown',
    'ChevronLeft',
    'ChevronRight',
    'AccountOutline',
    'AccountFill',
    'ChevronSmallUp',
    'ChevronSmallDown',
    'ChevronSmallLeft',
    'ChevronSmallRight',
] as const;
export type SpriteSymbol = (typeof SYMBOLS)[number];
