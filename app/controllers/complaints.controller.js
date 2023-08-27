const complaintModel = require('../database/models/complaint.model')
const helper = require("../helpers/helpers")

class Complaint {
    static create = async (req, res) => {
        try {

            const existingComplaint = await complaintModel.findOne(req.body);

            if (existingComplaint) {

                helper.responseHandler(res, 409, false, null, "Complaint already exists");

            } else {
                const complaintData = new complaintModel(req.body)
                await complaintData.save()
                helper.responseHandler(res, 201, true, complaintData, "Complaint added successfully")
            }
        }
        catch (e) {
            helper.responseHandler(res, 500, false, e, e.message)
        }
    }

    static update = async (req, res) => {
        try {
            const complaintData = await complaintModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            if (!complaintData) {
                helper.responseHandler(res, 404, false, null, "Complaint Is not exist")
            } else {
                helper.responseHandler(res, 200, true, complaintData, "Complaint Updated successfully")
            }

        }
        catch (e) {
            helper.responseHandler(res, 500, false, e, e.message)
        }
    }

    static delete = async (req, res) => {
        try {
            const complaintData = await complaintModel.findOneAndDelete({ _id: req.params.id })
            if (!complaintData) {
                helper.responseHandler(res, 404, false, null, "Complaint Is not exist")
            } else {
                helper.responseHandler(res, 200, true, complaintData, "Complaint Deleted successfully")
            }

        }
        catch (e) {
            helper.responseHandler(res, 500, false, e, e.message)
        }
    }


    static singleComplaint = async (req, res) => {
        try {
            const findComplaintById = await complaintModel.findById(req.params.id);
            if (!findComplaintById) {
                helper.responseHandler(res, 404, false, findComplaintById, "Complaint Is not exist")
            } else {
                helper.responseHandler(res, 200, true, findComplaintById, "Complaint found successfully")
            }

        }
        catch (e) {
            helper.responseHandler(res, 500, false, e, e.message)
        }
    }

    static getComplaints = async (req, res) => {
        try {
            const complaintsData = await complaintModel.find();
            if (complaintsData.length <= 0) {

                helper.responseHandler(res, 404, false, complaintsData.length, "No Complaints created Yet")

            } else {

                helper.responseHandler(res, 200, true, complaintsData, "Complaints successfully found")
            }

        }
        catch (e) {
            helper.responseHandler(res, 500, false, e, e.message)
        }
    }
}

module.exports = Complaint