const router = require("express").Router()
const Concerts = require("../controllers/concerts.controller")


router.post("/create", Concerts.create)

router.get("/all", Concerts.getConcerts)


router.put("/update/:id", Concerts.update)

router.get("/get/:id", Concerts.singleConcert)

router.delete("/delete/:id", Concerts.delete)


module.exports = router