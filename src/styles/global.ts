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
        ${(props) => props.theme.typographies.text.link}
    }

    .text-medium {
        ${(props) => props.theme.typographies.text.medium}
    }

    .text-small {
        ${(props) => props.theme.typographies.text.small}
    }

    :focus {
       outline: 0;
       box-shadow: 0 0 0 2px ${(props) => props.theme.colors.base.border}
    }
`;
