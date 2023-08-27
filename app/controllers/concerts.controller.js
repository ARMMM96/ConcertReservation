const concertModel = require('../database/models/concert.model')
const helper = require("../helpers/helpers")

class Concert {
    static create = async (req, res) => {
        try {

            const existingConcert = await concertModel.findOne(req.body);

            if (existingConcert) {

                helper.responseHandler(res, 409, false, null, "Concert already exists");

            } else {
                const concertData = new concertModel(req.body)
                await concertData.save()
                helper.responseHandler(res, 201, true, concertData, "Concert added successfully")
            }
        }
        catch (e) {
            helper.responseHandler(res, 500, false, e, e.message)
        }
    }

    static update = async (req, res) => {
        try {
            const concertData = await concertModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            if (!concertData) {
                helper.responseHandler(res, 404, false, null, "Concert Is not exist")
            } else {
                helper.responseHandler(res, 200, true, concertData, "Concert Updated successfully")
            }

        }
        catch (e) {
            helper.responseHandler(res, 500, false, e, e.message)
        }
    }

    static delete = async (req, res) => {
        try {
            const concertData = await concertModel.findOneAndDelete({ _id: req.params.id })
            if (!concertData) {
                helper.responseHandler(res, 404, false, null, "Concert Is not exist")
            } else {
                helper.responseHandler(res, 200, true, concertData, "Concert Deleted successfully")
            }

        }
        catch (e) {
            helper.responseHandler(res, 500, false, e, e.message)
        }
    }


    static singleConcert = async (req, res) => {
        try {
            const findConcertById = await concertModel.findById(req.params.id)
            if (!findConcertById) {
                helper.responseHandler(res, 404, false, findConcertById, "Concert Is not exist")
            } else {
                helper.responseHandler(res, 200, true, findConcertById, "Concert found successfully")
            }

        }
        catch (e) {
            helper.responseHandler(res, 500, false, e, e.message)
        }
    }

    static getConcerts = async (req, res) => {
        try {
            const concertsData = await concertModel.find().populate('roles');
            if (concertsData.length <= 0) {

                helper.responseHandler(res, 404, false, concertsData.length, "No Concerts created Yet")

            } else {

                helper.responseHandler(res, 200, true, concertsData, "Concerts successfully found")
            }

        }
        catch (e) {
            helper.responseHandler(res, 500, false, e, e.message)
        }
    }
}

module.exports = Concert
