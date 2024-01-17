import {
    ReactNode,
    createContext,
    useCallback,
    useEffect,
    useState,
} from 'react';
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
    html_url: string;
}

interface Issue {
    body: string;
    created_at: string;
    title: string;
    number: string;
}

interface Issues {
    total_count: number;
    items: Issue[];
}

interface IssueExtended extends Issue {
    comments: string;
    html_url: string;
    user: Pick<User, 'login'>;
}

interface GithubContextType {
    user: User;
    issue: IssueExtended;
    issues: Issues;
    getIssueFromRepository: (numberParam: string | null) => Promise<void>;
    getIssuesFromRepository: (query: string) => Promise<void>;
}

interface GithubProviderProps {
    children: ReactNode;
}

export const GithubContext = createContext<GithubContextType>(
    {} as GithubContextType
);

export function GithubProvider({ children }: GithubProviderProps) {
    const [issue, setIssue] = useState<IssueExtended>({} as IssueExtended);
    const [user, setUser] = useState<User>({} as User);
    const [issues, setIssues] = useState<Issues>({
        total_count: 0,
        items: [],
    });

    async function getUserDataFromGitHub(): Promise<void> {
        const response = await api.get(`/users/andrefer1`);
        const data: User = response.data;
        setUser(data);
    }

    async function getIssuesFromRepository(query: string = ''): Promise<void> {
        const repository: string =
            'Andrefer1/ignite-reactjs-desafio-03-github-blog';
        const response = await api.get(
            `/search/issues?q=${query}%20repo:${repository}`
        );
        const data: Issues = response.data;
        setIssues(data);
    }

    // async function getIssueFromRepository(
    //     numberParam: string | null
    // ): Promise<void> {

    // }

    const getIssueFromRepository = useCallback(
        async (numberParam: string | null) => {
            if (!numberParam) return;

            const response = await api.get(
                `/repos/Andrefer1/ignite-reactjs-desafio-03-github-blog/issues/${numberParam}`
            );
            const data: IssueExtended = response.data;
            setIssue(data);
        },
        []
    );

    useEffect(() => {
        getUserDataFromGitHub();
        getIssuesFromRepository();
    }, []);

    return (
        <GithubContext.Provider
            value={{
                user,
                issue,
                issues,
                getIssueFromRepository,
                getIssuesFromRepository,
            }}
        >
            {children}
        </GithubContext.Provider>
    );
}
