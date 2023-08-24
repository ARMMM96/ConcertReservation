const express = require("express")
const cors = require("cors")
const path = require("path")
const app = express()

const connectDB = require('./database/connection')


app.use(cors())
app.use(express.static(path.join(__dirname, "../public")))

connectDB()

app.use(express.json())



app.all("*", (req, res) => {
    res.status(404).send({
        apisStatus: false,
        message: "Invalid URL",
        data: {}
    })
})

module.exports = app