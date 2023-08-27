const rateModel = require('../database/models/rate.model')
const helper = require("../helpers/helpers")

class Rate {
    static create = async (req, res) => {
        try {

            const existingRate = await rateModel.findOne(req.body);

            if (existingRate) {

                helper.responseHandler(res, 409, false, null, "Rate already exists");

            } else {
                const rateData = new rateModel(req.body)
                await rateData.save()
                helper.responseHandler(res, 201, true, rateData, "Rate added successfully")
            }
        }
        catch (e) {
            helper.responseHandler(res, 500, false, e, e.message)
        }
    }

    static update = async (req, res) => {
        try {
            const rateData = await rateModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            if (!rateData) {
                helper.responseHandler(res, 404, false, null, "Rate Is not exist")
            } else {
                helper.responseHandler(res, 200, true, rateData, "Rate Updated successfully")
            }

        }
        catch (e) {
            helper.responseHandler(res, 500, false, e, e.message)
        }
    }

    static delete = async (req, res) => {
        try {
            const rateData = await rateModel.findOneAndDelete({ _id: req.params.id })
            if (!rateData) {
                helper.responseHandler(res, 404, false, null, "Rate Is not exist")
            } else {
                helper.responseHandler(res, 200, true, rateData, "Rate Deleted successfully")
            }

        }
        catch (e) {
            helper.responseHandler(res, 500, false, e, e.message)
        }
    }


    static singleRate = async (req, res) => {
        try {
            const findRateById = await rateModel.findById(req.params.id)
            if (!findRateById) {
                helper.responseHandler(res, 404, false, findRateById, "Rate Is not exist")
            } else {
                helper.responseHandler(res, 200, true, findRateById, "Rate found successfully")
            }

        }
        catch (e) {
            helper.responseHandler(res, 500, false, e, e.message)
        }
    }

    static getRates = async (req, res) => {
        try {
            const ratesData = await rateModel.find();
            if (ratesData.length <= 0) {

                helper.responseHandler(res, 404, false, ratesData.length, "No Rates created Yet")

            } else {

                helper.responseHandler(res, 200, true, ratesData, "Rates successfully found")
            }

        }
        catch (e) {
            helper.responseHandler(res, 500, false, e, e.message)
        }
    }
}

module.exports = Rate
