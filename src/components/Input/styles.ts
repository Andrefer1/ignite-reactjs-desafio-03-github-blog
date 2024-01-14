import { styled } from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    margin-top: 4.5rem;

    div {
        display: flex;
        justify-content: space-between;

        h3 {
            margin-bottom: 0.75rem;
        }
    }

    input {
        padding: 0.75rem 1rem;
        border-radius: 6px;
        border: 1px solid ${(props) => props.theme.colors.base.border};
        background: ${(props) => props.theme.colors.base.input};
        width: 100%;
        color: ${(props) => props.theme.colors.base.text};

        &::placeholder {
            color: ${(props) => props.theme.colors.base.label};
        }
    }
`;
