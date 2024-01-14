import { styled } from 'styled-components';

import HeaderBackground from '../../assets/header-background.svg';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    height: 18.5rem;

    background: url(${HeaderBackground}) no-repeat center/cover;

    img {
        margin-top: -90px;
        object-fit: none;
    }
`;
