import moment from 'moment';

export default function parseDate(timestamp: number) {
    const currentDate = moment();
    const inputDate = moment(timestamp);

    if (currentDate.isSame(inputDate, 'year')) {
        return inputDate.format('MMMM D');
    } else {
        return inputDate.from(currentDate);
    }
}