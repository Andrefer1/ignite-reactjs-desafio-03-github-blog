import { ChangeEvent, useContext } from 'react';
import { GithubContext } from '../../contexts';
import { InputContainer } from './styles';

interface InputProps {
    totalPublicacoes: number;
}

export function Input(props: InputProps) {
    const { getIssuesFromRepository } = useContext(GithubContext);

    return (
        <InputContainer>
            <div>
                <h3>Publicações</h3>
                <span className="text-small">
                    {props.totalPublicacoes} publicações
                </span>
            </div>

            <input
                id="field-search-content"
                type="text"
                placeholder="Buscar conteúdo"
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const query: string = event.target.value;

                    getIssuesFromRepository(query);
                }}
            />
        </InputContainer>
    );
}
