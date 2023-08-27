const QRCode = require('qrcode');

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
    static generateQRCode = async (ticketId) => {


        try {
            const qrcode = await QRCode.toDataURL(ticketId);
            return qrcode;
        } catch (err) {
            return errl
        }
    }

}



module.exports = Herlper