import { ThemeProvider } from 'styled-components';
import { Header } from './components';
import { Feed } from './pages';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />

            <Header />
            <Feed />
        </ThemeProvider>
    );
}

export default App;
