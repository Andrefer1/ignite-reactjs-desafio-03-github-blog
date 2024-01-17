import { styled } from 'styled-components';

export const FeedContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .cards {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        margin-top: 3rem;
    }
`;
