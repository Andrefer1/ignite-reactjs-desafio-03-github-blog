import { styled } from 'styled-components';

export const IssueContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    max-width: 54rem;
    margin: 0 auto;

    div {
        color: ${(props) => props.theme.colors.base.text};
    }
`;

export const ContentContainer = styled.div`
    padding: 2.5rem 2rem;

    p {
        margin-bottom: 1.5rem;
    }

    pre {
        background: ${(props) => props.theme.colors.base.post};
        padding: 1rem;
        margin: 1.5rem 0;
    }
`;
