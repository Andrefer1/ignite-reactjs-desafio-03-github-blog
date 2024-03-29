import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
    faArrowUpRightFromSquare,
    faCalendarDay,
    faChevronLeft,
    faComment,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { Link, NavLink, useSearchParams } from 'react-router-dom';
import { useContextSelector } from 'use-context-selector';
import { GithubContext } from '../../../../contexts';
import { dateFormatter } from '../../../../utils';
import { ContentContainer, ProfileContainer } from './styles';

export function Profile() {
    const [searchParams] = useSearchParams();
    const { issue, getIssueFromRepository } = useContextSelector(
        GithubContext,
        (context) => ({
            issue: context.issue,
            getIssueFromRepository: context.getIssueFromRepository,
        })
    );

    const numberParam: string | null = searchParams.get('number');

    useEffect(() => {
        getIssueFromRepository(numberParam);
    }, [getIssueFromRepository, numberParam]);

    return (
        <ProfileContainer>
            <ContentContainer>
                <header>
                    <NavLink to={'/'}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                        Voltar
                    </NavLink>
                    <Link to={issue.html_url} target="_blank">
                        Ver no Github
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </Link>
                </header>

                <main>
                    <h1>{issue.title}</h1>
                </main>

                <footer>
                    <div>
                        <FontAwesomeIcon icon={faGithub} />
                        <div className="text-medium">{issue?.user?.login}</div>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faCalendarDay} />
                        <div className="text-medium">
                            {dateFormatter(issue.created_at)}
                        </div>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faComment} />
                        <div className="text-medium">
                            {issue.comments} comentários
                        </div>
                    </div>
                </footer>
            </ContentContainer>
        </ProfileContainer>
    );
}
