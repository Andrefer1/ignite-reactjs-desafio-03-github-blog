import { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import { GithubContext } from '../../contexts';
import { Profile } from './components';
import { ContentContainer, IssueContainer } from './styles';

export function Issue() {
    const { issue } = useContext(GithubContext);

    return (
        <IssueContainer>
            <Profile />

            <ContentContainer>
                <ReactMarkdown>{issue.body}</ReactMarkdown>
            </ContentContainer>
        </IssueContainer>
    );
}
