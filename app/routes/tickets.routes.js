const router = require("express").Router()
const Tickets = require("../controllers/tickets.controller")


router.post("/create", Tickets.create)

router.get("/all", Tickets.getTickets)


router.put("/update/:id", Tickets.update)

router.get("/get/:id", Tickets.singleTicket)

router.delete("/delete/:id", Tickets.delete)


module.exports = router 