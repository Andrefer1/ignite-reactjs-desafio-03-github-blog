import ReactMarkdown from 'react-markdown';
import { useContextSelector } from 'use-context-selector';
import { GithubContext } from '../../contexts';
import { Profile } from './components';
import { ContentContainer, IssueContainer } from './styles';

export function Issue() {
    const issue = useContextSelector(GithubContext, (context) => {
        return context.issue;
    });

    return (
        <IssueContainer>
            <Profile />

            <ContentContainer>
                <ReactMarkdown>{issue.body}</ReactMarkdown>
            </ContentContainer>
        </IssueContainer>
    );
}
