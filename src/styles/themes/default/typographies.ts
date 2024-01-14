import { colors } from './colors';

export const TITLE = {
    large: {
        color: colors.base.title,
        fontSize: '1.5rem',
        fontWeight: 700,
        lineHeight: '1.95rem',
    },
    medium: {
        color: colors.base.title,
        fontSize: '1.25rem',
        fontWeight: 700,
        lineHeight: '2rem',
    },
    small: {
        color: colors.base.subtitle,
        fontSize: '1.125rem',
        fontWeight: 700,
        lineHeight: '1.8rem',
    },
} as const;

export const TEXT = {
    medium: {
        color: colors.base.text,
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: '1.6rem',
    },
    small: {
        color: colors.base.span,
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: '1.4rem',
    },
    link: {
        color: colors.brand.blue,
        fontSize: '0.75rem',
        fontWeight: 700,
        lineHeight: '1.2rem',
        textTransform: 'uppercase',
        textDecoration: 'none',
    },
} as const;

export type TypographyType = {
    text: typeof TEXT;
    title: typeof TITLE;
};

export const typographies: TypographyType = {
    text: TEXT,
    title: TITLE,
};
