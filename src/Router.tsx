import { Route, Routes } from 'react-router';
import { Feed } from './pages';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Feed />} />
        </Routes>
    );
}
