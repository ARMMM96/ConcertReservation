const express = require("express")
const cors = require("cors")
const path = require("path")
const app = express()

const connectDB = require('./database/connection')


app.use(cors())
app.use(express.static(path.join(__dirname, "../public")))

connectDB()

app.use(express.json())

const userRoutes = require('./routes/user.routes')
const urlsRoutes = require('./routes/routes.routes')
const rolesRoutes = require('./routes/roles.routes')
const concertsRoutes = require('./routes/concerts.routes')
const complaintRoutes = require('./routes/complaint.routes')




app.use("/api/user/", userRoutes)
app.use("/api/routes/", urlsRoutes)
app.use("/api/roles/", rolesRoutes)
app.use("/api/concerts/", concertsRoutes)
app.use("/api/complaints/", complaintRoutes)

app.all("*", (req, res) => {
    res.status(404).send({
        apisStatus: false,
        message: "Invalid URL",
        data: {}
    })
})

module.exports = app