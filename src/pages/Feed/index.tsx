import { useContext } from 'react';
import { Card, Input } from '../../components';
import { GithubContext } from '../../contexts';
import { Profile } from './components';
import { FeedContainer } from './styles';

export function Feed() {
    const { issues } = useContext(GithubContext);

    return (
        <FeedContainer>
            <Profile />

            <Input totalPublicacoes={issues.total_count} />

            <div className="cards">
                {issues.items?.map((item) => (
                    <Card key={item.number} item={item} />
                ))}
            </div>
        </FeedContainer>
    );
}
