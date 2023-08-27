const ticketModel = require('../database/models/ticket.model')
const helper = require("../helpers/helpers")


class Ticket {
    static create = async (req, res) => {
        try {
            const existingTicket = await ticketModel.findOne(req.body);
            if (existingTicket) {
                helper.responseHandler(res, 409, false, null, "Ticket already exists");
            } else {
                const ticketData = new ticketModel(req.body)
                const qrcode = await helper.generateQRCode(ticketData.id)
                ticketData.qrcode = qrcode
                await ticketData.save()
                helper.responseHandler(res, 201, true, ticketData, "Ticket added successfully")
            }
        }
        catch (e) {
            helper.responseHandler(res, 500, false, e, e.message)
        }
    }

    static update = async (req, res) => {
        try {
            const ticketData = await ticketModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            if (!ticketData) {
                helper.responseHandler(res, 404, false, null, "Ticket Is not exist")
            } else {
                helper.responseHandler(res, 200, true, ticketData, "Ticket Updated successfully")
            }

        }
        catch (e) {
            helper.responseHandler(res, 500, false, e, e.message)
        }
    }

    static delete = async (req, res) => {
        try {
            const ticketData = await ticketModel.findOneAndDelete({ _id: req.params.id })
            if (!ticketData) {
                helper.responseHandler(res, 404, false, null, "Ticket Is not exist")
            } else {
                helper.responseHandler(res, 200, true, ticketData, "Ticket Deleted successfully")
            }

        }
        catch (e) {
            helper.responseHandler(res, 500, false, e, e.message)
        }
    }


    static singleTicket = async (req, res) => {
        try {
            const findTicketById = await ticketModel.findById(req.params.id)
            if (!findTicketById) {
                helper.responseHandler(res, 404, false, findTicketById, "Ticket Is not exist")
            } else {
                helper.responseHandler(res, 200, true, findTicketById, "Ticket found successfully")
            }

        }
        catch (e) {
            helper.responseHandler(res, 500, false, e, e.message)
        }
    }

    static getTickets = async (req, res) => {
        try {
            const ticketsData = await ticketModel.find();
            if (ticketsData.length <= 0) {

                helper.responseHandler(res, 404, false, ticketsData.length, "No Tickets created Yet")

            } else {

                helper.responseHandler(res, 200, true, ticketsData, "Tickets successfully found")
            }

        }
        catch (e) {
            helper.responseHandler(res, 500, false, e, e.message)
        }
    }
}

module.exports = Ticket