import { HeaderContainer } from './styles';

import GithubBlogLogo from '../../assets/github-blog-logo.svg';

export function Header() {
    return (
        <HeaderContainer>
            <img src={GithubBlogLogo} alt="Github Blog logo" />
        </HeaderContainer>
    );
}
