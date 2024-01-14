import { styled } from 'styled-components';

export const ProfileContainer = styled.div`
    width: 54rem;
    height: 13.25rem;
    border-radius: 10px;
    background: ${(props) => props.theme.profile};
    box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
`;
