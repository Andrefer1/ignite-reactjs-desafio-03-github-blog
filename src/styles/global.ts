import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme.colors.base.background};
    }

    body, input, button, h1, h2, p {
        font: 400 1rem Nunito, sans-serif;
    }

    h1 {
        ${(props) => props.theme.typographies.title.large}
    }

    h2 {
        ${(props) => props.theme.typographies.title.medium}
    }

    h3 {
        ${(props) => props.theme.typographies.title.small}
    }

    p {
        color: ${(props) => props.theme.colors.base.text}
    }

    svg {
        color: ${(props) => props.theme.colors.base.label}
    }

    a {
        color: ${(props) => props.theme.colors.brand.blue};
        font-size: 12px;
        font-weight: 700;
        line-height: 1.2rem;
        text-transform: uppercase;
        text-decoration: none;
    }

    .text-small {
        ${(props) => props.theme.typographies.text.medium}
    }


`;
