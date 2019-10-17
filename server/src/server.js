require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

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
    // Load client secrets from a local file.
    const { subject, fromEmail, message } = req.body
    const msg = {
      to: 'emilycookx@gmail.com',
      from: fromEmail,
      subject: subject,
      text: message,
      html: message
    }

    sgMail
      .send(msg)
      .then(r => {
        res.json({ result: true, payload: { message: 'Email Sent!' } })
      })
      .catch(e => {
        console.log(e)
        return res.status(500).send({ result: false, payload: { e } })
      })
  } catch (e) {
    console.log(e)
    return res.status(500).send({ result: false, payload: { e } })
  }
})

module.exports = app
