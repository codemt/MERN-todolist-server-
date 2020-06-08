const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const corsOption = {

    origin: "http://localhost:8081"

}
app.use(cors(corsOption))

// parse requests of json 
app.use(bodyParser.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended : true }))


// sync database

// for production 
const db = require('./models')
db.sequelize.sync()

// for development
// const db = require('./models')
// db.sequelize.sync({ force : true }).then(() =>{

//     console.log("Drop and re-sync db");


// })




// simple route
app.get("/",(req,res) =>{

    res.json({ messege : " Welcome to Express Server"})

})


require('./routes/todolist.routes')(app)

// set PORT , listen for requests
const PORT = process.env.PORT || 5000
app.listen(PORT , ()=>{

    console.log(`Server is running on port ${PORT}`)

})

