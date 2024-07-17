const express = require('express');
const mailer = require('nodemailer');

const app42 = express();

let transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nvdhai2003@gmail.com',
        pass: 'zktl bnhh jrul ojdr'
    }
})

let mailOption = {
    from: 'nvdhai2003@gmail.com',
    to: 'nvdhai2003.mobiledev@gmail.com',
    subject: 'Gửi mail lab 4',
    text: 'Đây là mail gửi từ nvdhai2003@gmail.com ngày 17/07/2024'
}

transporter.sendMail(mailOption, (err, info) => {
    if (err) {
        console.log('Error occurred:', err);
    } else {
        console.log('Message sent: %s', info.messageId);
    }
})

app42.listen(3002, () => {
    console.log('Server listening on port 3002...');  // server is listening on port 3002 to receive requests from client-side applications.
})