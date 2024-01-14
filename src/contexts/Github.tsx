import { ReactNode, createContext, useEffect, useState } from 'react';
import { api } from '../libs/axios';

interface User {
    avatar_url: string;
    bio: string;
    company: string;
    followers: number;
    login: string;
    name: string;
    public_repos: number;
    repos_url: string;
    url: string;
}

interface ItemIssue {
    id: number;
    body: string;
    created_at: string;
    title: string;
    url: string;
}

interface Issues {
    total_count: number;
    items: ItemIssue[];
}

interface GithubContextType {
    user: User;
    issues: Issues;
    getIssuesFromRepository: (query: string) => Promise<void>;
}

interface GithubProviderProps {
    children: ReactNode;
}

export const GithubContext = createContext<GithubContextType>(
    {} as GithubContextType
);

export function GithubProvider({ children }: GithubProviderProps) {
    const [user, setUser] = useState<User>({} as User);
    const [issues, setIssues] = useState<Issues>({} as Issues);

    async function getUserDataFromGitHub() {
        const response = await api.get(`/users/andrefer1`);
        const data = response.data;
        setUser(data);
    }

    async function getIssuesFromRepository(query: string = '') {
        const repository: string =
            'Andrefer1/ignite-reactjs-desafio-03-github-blog';

        const response = await api.get(
            `/search/issues?q=${query}%20repo:${repository}`
        );

        const data = response.data;
        setIssues(data);
    }

    useEffect(() => {
        getUserDataFromGitHub();
        getIssuesFromRepository();
    }, []);

    return (
        <GithubContext.Provider
            value={{ user, issues, getIssuesFromRepository }}
        >
            {children}
        </GithubContext.Provider>
    );
}
