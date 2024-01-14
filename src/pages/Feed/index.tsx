import { useContext } from 'react';
import { Input } from '../../components';
import { GithubContext } from '../../contexts';
import { Profile } from './components';
import { FeedContainer } from './styles';

export function Feed() {
    const { issues } = useContext(GithubContext);

    return (
        <FeedContainer>
            <Profile />

            <Input totalPublicacoes={issues.total_count} />
        </FeedContainer>
    );
}
