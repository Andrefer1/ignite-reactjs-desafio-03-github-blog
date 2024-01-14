import { styled } from 'styled-components';

export const ProfileContainer = styled.div`
    width: 54rem;
    height: 13.25rem;
    border-radius: 10px;
    background: ${(props) => props.theme.colors.base.background};
    box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
    padding: 2rem 2.5rem;
    margin-top: -90px;
`;

export const ContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;

    aside {
        margin-right: 2rem;

        img {
            height: 9.25rem;
            width: 9.25rem;
            border-radius: 8px;
        }
    }

    main {
        display: flex;
        flex-direction: column;

        header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5rem;

            h1 {
                margin-top: 0.5rem;
            }

            a {
                svg {
                    margin-left: 0.5rem;
                    color: ${(props) => props.theme.colors.brand.blue};
                }
            }
        }

        p {
            flex-grow: 1;
        }

        footer {
            display: flex;
            gap: 1.5rem;

            div {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
        }
    }
`;
