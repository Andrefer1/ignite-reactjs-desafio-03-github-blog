import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
    faArrowUpRightFromSquare,
    faBuilding,
    faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../../../libs/axios';
import { ContentContainer, ProfileContainer } from './styles';

interface User {
    avatar_url: string;
    bio: string;
    company: string;
    followers: number;
    login: string;
    name: string;
    url: string;
    public_repos: number;
    repos_url: string;
}

export function Profile() {
    const [user, setUser] = useState<User>({} as User);

    async function fetchUserDataFromGitHub() {
        const response = await api.get(`/users/andrefer1`);
        const data = response.data;
        setUser(data);
    }

    useEffect(() => {
        fetchUserDataFromGitHub();
    }, []);

    return (
        <ProfileContainer>
            <ContentContainer>
                <aside>
                    <img src={user.avatar_url} alt="User profile photo" />
                </aside>

                <main>
                    <header>
                        <h1>{user.name}</h1>

                        <Link to={'/'}>
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
                            <div className="text-small">{user.login}</div>
                        </div>
                        {user.company && (
                            <div>
                                <FontAwesomeIcon icon={faBuilding} />
                                <div className="text-small">{user.company}</div>
                            </div>
                        )}
                        <div>
                            <FontAwesomeIcon icon={faUserGroup} />
                            <div className="text-small">
                                {user.followers} seguidores
                            </div>
                        </div>
                    </footer>
                </main>
            </ContentContainer>
        </ProfileContainer>
    );
}
