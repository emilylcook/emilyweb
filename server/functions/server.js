const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(functions.config().sendgrid.key)

var whitelist = functions.config().alloweddomains.key
var corsOptions = {
  origin: function(origin, callback) {
    if ('https://emilycook.me' === origin || !origin) {
      callback(null, true)
    } else {
      console.log('whitelist hiii')
      console.log(origin)
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions))

app.get('test', function(req, res, next) {
  res.send('Cat')
})

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
