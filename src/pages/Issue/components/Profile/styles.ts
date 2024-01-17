import { styled } from 'styled-components';

export const ProfileContainer = styled.div`
    width: 54rem;
    max-height: 13.25rem;
    border-radius: 10px;
    background: ${(props) => props.theme.colors.base.background};
    box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
    padding: 2rem 2.5rem;
    margin-top: -90px;
`;

export const ContentContainer = styled.div`
    align-items: center;
    flex-direction: column;

    max-width: 54rem;
    margin: 0 auto;

    header {
        display: flex;
        justify-content: space-between;

        a {
            &:first-child {
                svg {
                    margin-right: 0.5rem;
                }
            }

            &:last-child {
                svg {
                    margin-left: 0.5rem;
                }
            }
        }
    }

    main {
        margin-top: 1.25rem;
        margin-bottom: 0.5rem;
        p {
        }
    }

    footer {
        display: flex;
        gap: 2rem;

        div {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            color: ${(props) => props.theme.colors.base.span};

            svg {
                color: ${(props) => props.theme.colors.base.label};
            }
        }
    }
`;
