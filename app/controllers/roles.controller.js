const rolesModel = require('../database/models/role.model')
const helper = require("../helpers/helpers")
class Role {
    static createRole = async (req, res) => {
        try {
            const rolesData = new rolesModel(req.body)
            await rolesData.save()
            helper.responseHandler(res, 201, true, rolesData, "Role added successfully")
        }
        catch (e) {
            helper.responseHandler(res, 500, false, e, e.message)
        }
    }
    static getRoles = async (req, res) => {
        try {
            const rolesData = await rolesModel.find();
            if (rolesData.length <= 0) {
                helper.responseHandler(res, 404, false, null, "Role Is not exist")
            } else {

                helper.responseHandler(res, 200, true, rolesData, "Roles found")
            }
        }
        catch (e) {
            helper.responseHandler(res, 500, false, e, e.message)
        }
    }
    static getRole = async (req, res) => {
        try {
            const rolesData = await rolesModel.findById(req.params.id);
            if (!rolesData) {
                helper.responseHandler(res, 404, false, null, "Role Is not exist")
            } else {

                helper.responseHandler(res, 200, true, rolesData, "Roles found")
            }
        }
        catch (e) {
            helper.responseHandler(res, 500, false, e, e.message)
        }
    }
    static updateRole = async (req, res) => {
        try {
            const rolesData = await rolesModel.findOneAndUpdate(
                { _id: req.params.id, },
                { ...req.body },
                { new: true }
            );
            if (!rolesData) {
                helper.responseHandler(res, 404, false, null, "Role Is not exist")
            } else {

                helper.responseHandler(res, 200, true, rolesData, "Role updated")
            }
        }
        catch (e) {
            helper.responseHandler(res, 500, false, e, e.message)
        }
    }

    static deleteRole = async (req, res) => {
        try {
            const rolesData = await rolesModel.findByIdAndRemove(req.params.id)
            if (!rolesData) {
                helper.responseHandler(res, 404, false, null, "Role Is not exist")
            } else {
                helper.responseHandler(res, 200, true, rolesData, "Role deleted")
            }
        } catch (e) {
            helper.responseHandler(res, 500, false, e, e.message)
        }
    }
}
module.exports = Role