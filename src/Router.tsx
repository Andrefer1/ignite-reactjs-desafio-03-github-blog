import { Route, Routes } from 'react-router';
import { Feed, Issue } from './pages';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/issue" element={<Issue />} />
        </Routes>
    );
}
