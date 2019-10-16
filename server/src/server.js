require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()

var whitelist = process.env.ALLOWED_DOMAINS || []
var corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      console.log(origin)
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions))

app.post('/sendEmail/', function(req, res, next) {
  try {
    // TODO SEND EMAIL
    res.json({ result: true, payload: { message: 'Email Sent!' } })
  } catch (e) {
    return res.status(500).send({ result: false, payload: { err } })
  }
})

module.exports = app
