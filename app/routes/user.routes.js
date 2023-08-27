
const router = require("express").Router()
const userController = require("../controllers/users.controller")





router.post("/register", userController.register)
router.post("/login", userController.login)
router.post("/change-password/:id", userController.changePassword)
router.get("/get/:id", userController.getSingleUser)
router.get("/all", userController.getAllUsers)
router.put("/update/:id", userController.updateUserData)
router.delete("/delete/:id", userController.deleteUser)

module.exports = router
