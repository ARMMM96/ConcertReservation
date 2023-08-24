
class Herlper {
    static responseHandler = (res, statusCode, apiStatus, data, message) => {
        res.status(statusCode).send({
            apiStatus,
            data,
            message
        })
    }

    static formatDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [day, month, year].join('-');
    }
}
module.exports = Herlper