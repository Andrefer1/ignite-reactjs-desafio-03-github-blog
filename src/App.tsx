import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Header } from './components';
import { Feed } from './pages';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyle />

                <Header />
                <Feed />
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
