const router = require("express").Router()
const Rates = require("../controllers/rates.controller")


router.post("/create", Rates.create)

router.get("/all", Rates.getRates)


router.put("/update/:id", Rates.update)

router.get("/get/:id", Rates.singleRate)

router.delete("/delete/:id", Rates.delete)


module.exports = router