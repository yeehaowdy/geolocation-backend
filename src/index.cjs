const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

//endpoints

const port = 3333
var actualPort = process.env.PORT || port
app.listen(actualPort, (err)=>{
    console.log('backend runs on port ', port)
})