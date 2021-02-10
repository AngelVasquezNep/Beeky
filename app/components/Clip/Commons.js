import { dateFormat } from 'utils/date';

export const DateMessage = ({ date }) => <small>{dateFormat(date)}</small>;
