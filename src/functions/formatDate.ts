import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat)

export function formatDate(date: Date, format: string) {
    return dayjs(date).format(format);
}