const router = require("express").Router()
const Routes = require("../controllers/routes.controller")


router.post("/create", Routes.create)

router.get("/all", Routes.getRoutes)


router.put("/update/:id", Routes.update)

router.get("/get/:id", Routes.singleRoute)

router.delete("/delete/:id", Routes.delete)


module.exports = router
