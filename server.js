const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = 3000;
const app = express();
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);


// ContactForm

// var express = require('express');
// var router = express.Router();
// var nodemailer = require('nodemailer');
// var cors = require('cors');
// const creds = require('./config');
//
// var transport = {
//     host: 'smtp.example.com', // Don’t forget to replace with the SMTP host of your provider
//     port: 587,
//     auth: {
//     user: creds.USER,
//     pass: creds.PASS
//   }
// }
//
// var transporter = nodemailer.createTransport(transport)
//
// transporter.verify((error, success) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Server is ready to take messages');
//   }
// });
//
// router.post('/send', (req, res, next) => {
//   var name = req.body.name
//   var email = req.body.email
//   var message = req.body.message
//   var content = `name: ${name} \n email: ${email} \n message: ${message} `
//
//   var mail = {
//     from: name,
//     to: 'RECEIVING_EMAIL_ADDRESS_GOES_HERE',  // Change to email address that you want to receive messages on
//     subject: 'New Message from Contact Form',
//     text: content
//   }
//
//   transporter.sendMail(mail, (err, data) => {
//     if (err) {
//       res.json({
//         status: 'fail'
//       })
//     } else {
//       res.json({
//        status: 'success'
//       })
//     }
//   })
// })
//
// const app = express()
// app.use(cors())
// app.use(express.json())
// app.use('/', router)
// app.listen(3002)
