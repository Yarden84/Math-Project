// const express = require('express');
// const bodyParser = require('body-parser');
// const exphbs = require('express-handlebars');
// const path = require('path');
// const nodemailer = require('nodemailer');

// const app = express();

// // View engine setup
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

// // Body parser middleware
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// // Static folder
// app.use('/public', express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.render('contact');
// });

// app.post('/send', (req, res) => {
//     const output =
//     `<p>You have a new contact request</p>
//     <h3>Contact Details</h3>
//     <ul>
//         <li>Name: ${req.body.name}</li>
//         <li>email: ${req.body.email}</li>
//         <li>Message: ${req.body.message}</li>
//     </ul>
//     `;

//     let transporter = nodemailer.createTransport({
//         host: 'smtp.gmail.com',
//         port: 587,
//         secure: false, // true for 465, false for other ports
//         auth: {
//             user: 'haizlermath@gmail.com', // generated ethereal user
//             pass: 'learnmath' // generated ethereal password
//         }
//     });

//     // setup email data with unicode symbols
//     let mailOptions = {
//         from: '"Yourself" <haizlermath@gmail.com>', // sender address
//         to: 'haizlermath@gmail.com', // list of receivers
//         subject: 'Contact Message', // Subject line
//         text: 'Hello world?', // plain text body
//         html: output // html body
//     };

//     // send mail with defined transport object
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return console.log(error);
//         }
//         console.log('Message sent: %s', info.messageId);
//         console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

//         res.render('contact', {msg:"Message has been sent"});
//     });
// });


// app.listen(3000, () => console.log('Server started...'));

// var port = process.env.PORT || 8080

// app.listen(port, function(){
//     console.log("app running");
// })