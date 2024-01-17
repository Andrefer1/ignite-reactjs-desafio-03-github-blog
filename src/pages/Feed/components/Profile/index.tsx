import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
    faArrowUpRightFromSquare,
    faBuilding,
    faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GithubContext } from '../../../../contexts';
import { ContentContainer, ProfileContainer } from './styles';

export function Profile() {
    const { user } = useContext(GithubContext);

    return (
        <ProfileContainer>
            <ContentContainer>
                <aside>
                    <img src={user.avatar_url} alt="User profile photo" />
                </aside>

                <main>
                    <header>
                        <h1>{user.name}</h1>

                        <Link to={user.html_url} target="_blank">
                            GITHUB
                            <FontAwesomeIcon
                                size="xs"
                                icon={faArrowUpRightFromSquare}
                            />
                        </Link>
                    </header>

                    <p>{user.bio}</p>

                    <footer>
                        <div>
                            <FontAwesomeIcon icon={faGithub} />
                            <div className="text-medium">{user.login}</div>
                        </div>
                        {user.company && (
                            <div>
                                <FontAwesomeIcon icon={faBuilding} />
                                <div className="text-medium">
                                    {user.company}
                                </div>
                            </div>
                        )}
                        <div>
                            <FontAwesomeIcon icon={faUserGroup} />
                            <div className="text-medium">
                                {user.followers} seguidores
                            </div>
                        </div>
                    </footer>
                </main>
            </ContentContainer>
        </ProfileContainer>
    );
}
