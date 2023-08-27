const router = require("express").Router()
const Role = require("../controller/roles.controller")



router.post("/create", Role.createRole)

router.put("/update/:id", Role.updateRole)


router.get("/get/:id", Role.getRole)

router.get("/all", Role.getRoles)

router.delete("/delete/:id", Role.deleteRole)


module.exports = router
