const BASE_COLORS = {
    title: '#E7EDF4',
    subtitle: '#C4D4E3',
    text: '#AFC2D4',
    span: '#7B96B2',
    label: '#3A536B',
    header: '#14589C',
    border: '#1C2F41',
    post: '#112131',
    profile: '#0B1B2B',
    background: '#071422',
    input: '#040F1A',
} as const;

const BRAND_COLORS = {
    blue: '#3294F8',
} as const;

export type ColorsType = {
    base: typeof BASE_COLORS;
    brand: typeof BRAND_COLORS;
};

export const colors: ColorsType = {
    base: BASE_COLORS,
    brand: BRAND_COLORS,
};
