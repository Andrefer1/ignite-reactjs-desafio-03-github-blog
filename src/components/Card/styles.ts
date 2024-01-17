import { styled } from 'styled-components';

export const CardContainer = styled.div`
    width: 26rem;
    height: 16.25rem;
    padding: 2rem;

    border-radius: 0.625rem;
    text-overflow: ellipsis;
    background: ${(props) => props.theme.colors.base.post};
    cursor: pointer;

    div {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        margin-bottom: 1.25rem;

        span {
            white-space: nowrap;
            color: ${(props) => props.theme.colors.base.span};
        }

        &:last-child {
            height: 55%;
        }
    }
`;
