const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

var addresses = []

//endpoints
app.get('/hello', (req,res)=>{
    console.log('nigger')
    return res.status(200).json({data: "sieg ___!"})
})

app.post('/geolocation', (req, res)=>{
  const {latitude, longitude} = req.body
  console.log({latitude, longitude})
  addresses.push({latitude, longitude})

  return res.status(201).json('ok')
})

const port = 3333
var actualPort = process.env.PORT || port
app.listen(actualPort, (err)=>{
    console.log('backend runs on port ', port)
})