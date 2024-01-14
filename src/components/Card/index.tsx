import { CardContainer } from './styles';

interface ItemIssue {
    id: number;
    body: string;
    created_at: string;
    title: string;
    url: string;
}

interface CardProps {
    item: ItemIssue;
}

export function Card(props: CardProps) {
    return (
        <CardContainer>
            <div>
                <h2>{props.item.title}</h2>
                <span>{props.item.created_at}</span>
            </div>

            <p>{props.item.body}</p>
        </CardContainer>
    );
}
