import GithubBlogLogo from '../../assets/github-blog-logo.svg'
import SideEffectLeft from '../../assets/side-effect-left.svg'
import SideEffectRight from '../../assets/side-effect-right.svg'
import { HeaderContainer } from './styles'

export function Header() {
    return (
        <HeaderContainer>
            <img src={SideEffectLeft} alt='Efeito lateral esquerdo do cabeçalho' />
            <img src={GithubBlogLogo} alt='Logo do Github Blog' />
            <img src={SideEffectRight} alt='Efeito lateral direito do cabeçalho' />
        </HeaderContainer>
    )
}
