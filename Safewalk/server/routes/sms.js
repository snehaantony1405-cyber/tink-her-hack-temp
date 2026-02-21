const express = require('express');
const router = express.Router();
const twilio = require('twilio');
const dotenv = require('dotenv');

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

router.post('/send-sms', (req, res) => {
    const { to, message } = req.body;

    client.messages.create({
        body: message,
        to: to,
        from: process.env.TWILIO_PHONE_NUMBER
    })
    .then((message) => {
        res.status(200).json({ success: true, messageSid: message.sid });
    })
    .catch((error) => {
        res.status(500).json({ success: false, error: error.message });
    });
});

module.exports = router;