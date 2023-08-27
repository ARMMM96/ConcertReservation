const router = require("express").Router()
const Complaints = require("../controllers/complaints.controller")


router.post("/create", Complaints.create)

router.get("/all", Complaints.getComplaints)


router.put("/update/:id", Complaints.update)

router.get("/get/:id", Complaints.singleComplaint)

router.delete("/delete/:id", Complaints.delete)

module.exports = router
