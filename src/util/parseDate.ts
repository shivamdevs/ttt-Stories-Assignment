import moment from 'moment';

export default function parseDate(timestamp: number, noFormat = false) {
    const currentDate = moment();
    const inputDate = moment(timestamp);

    if (noFormat) return inputDate.format("MMMM D, YYYY [at] h:mm A dddd");

    if (currentDate.isSame(inputDate, 'year')) {
        return inputDate.format('MMMM D');
    } else {
        return inputDate.from(currentDate);
    }
}