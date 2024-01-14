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
`;
