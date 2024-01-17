import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const dateFormatter = (date: string): string => {
    if (!date) return '';

    return formatDistanceToNow(new Date(date), {
        addSuffix: true,
        locale: ptBR,
    });
};
