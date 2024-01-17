import { useNavigate } from 'react-router';
import { dateFormatter } from '../../utils';
import { CardContainer } from './styles';

interface ItemIssue {
    body: string;
    created_at: string;
    title: string;
    number: string;
}

interface CardProps {
    item: ItemIssue;
}

export function Card(props: CardProps) {
    const navigate = useNavigate();

    function sliceText(text: string): string {
        const displayedText = `${text.slice(0, 181)}...`;

        return displayedText;
    }

    function handleOpenIssue(): void {
        navigate(`/issue?number=${props.item.number}`);
    }

    return (
        <CardContainer onClick={handleOpenIssue}>
            <div>
                <h2>{props.item.title}</h2>

                <span className="text-small">
                    {dateFormatter(props.item.created_at)}
                </span>
            </div>

            <div>
                <p className="text-medium">{sliceText(props.item.body)}</p>
            </div>
        </CardContainer>
    );
}
