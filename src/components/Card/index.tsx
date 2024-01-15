import { dateFormatter } from '../../utils';
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
    function sliceText(text: string) {
        const displayedText = `${text.slice(0, 181)}...`;

        return displayedText;
    }

    return (
        <CardContainer>
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
