import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Router } from './Router';
import { Header } from './components';
import { GithubProvider } from './contexts';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyle />

                <Header />

                <GithubProvider>
                    <Router />
                </GithubProvider>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
