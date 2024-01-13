import { Header } from './components'
import { Feed } from './pages'
import { GlobalStyle } from './styles/global'

function App() {
    return (
        <>
            <GlobalStyle />

            <Header />
            <Feed />
        </>
    )
}

export default App
