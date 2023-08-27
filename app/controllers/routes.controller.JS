const routesModel = require('../database/models/route.model')
const helper = require("../helpers/helpers")
class Route {
    static create = async (req, res) => {
        try {

            const existingRoute = await routesModel.findOne(req.body);

            if (existingRoute) {

                helper.responseHandler(res, 409, false, null, "Route already exists");

            } else {
                const routesData = new routesModel(req.body)
                await routesData.save()
                helper.responseHandler(res, 201, true, routesData, "Route added successfully")
            }
        }
        catch (e) {
            helper.responseHandler(res, 500, false, e, e.message)
        }
    }

    static update = async (req, res) => {
        try {
            const routesData = await routesModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            if (!routesData) {
                helper.responseHandler(res, 404, false, null, "Route Is not exist")
            } else {
                helper.responseHandler(res, 200, true, routesData, "Route Updated successfully")
            }

        }
        catch (e) {
            helper.responseHandler(res, 500, false, e, e.message)
        }
    }

    static delete = async (req, res) => {
        try {
            const routesData = await routesModel.findOneAndDelete({ _id: req.params.id })
            if (!routesData) {
                helper.responseHandler(res, 404, false, null, "Route Is not exist")
            } else {
                helper.responseHandler(res, 200, true, routesData, "Route Deleted successfully")
            }

        }
        catch (e) {
            helper.responseHandler(res, 500, false, e, e.message)
        }
    }


    static singleRoute = async (req, res) => {
        try {
            const findRouteById = await routesModel.findById(req.params.id).populate('roles');
            if (!findRouteById) {
                helper.responseHandler(res, 404, false, findRouteById, "Route Is not exist")
            } else {
                helper.responseHandler(res, 200, true, findRouteById, "Route found successfully")
            }

        }
        catch (e) {
            helper.responseHandler(res, 500, false, e, e.message)
        }
    }

    static getRoutes = async (req, res) => {
        try {
            const routesData = await routesModel.find().populate('roles');
            if (routesData.length <= 0) {

                helper.responseHandler(res, 404, false, routesData.length, "No Routes created Yet")

            } else {

                helper.responseHandler(res, 200, true, routesData, "Routes successfully found")
            }

        }
        catch (e) {
            helper.responseHandler(res, 500, false, e, e.message)
        }
    }
}
module.exports = Route
