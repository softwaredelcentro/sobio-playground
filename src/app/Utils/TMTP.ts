export class TMTP {

    public static formatTimestamp(timestamp) {
        if (timestamp) {
            const date = new Date();
            date.setTime(timestamp);
            console.log('FORMATTING: ', timestamp, date.getTime());
            return  date.getHours() + ':' +
                    date.getMinutes() + ' ' +
                    date.getDate() + '/' +
                    (date.getMonth() + 1) + '/' +
                    date.getFullYear();
        } else {
            return 'N/A';
        }
    }

}
