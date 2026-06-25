const nodemailer = require('nodemailer');
const html = require('./jobSearch');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

async function sendMail() {
  try {

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: 'QA Manager Jobs - Daily Alert',
      html
    });

    console.log('Email sent successfully');

  } catch (error) {

    console.error('Email failed');
    console.error(error);

  }
}

sendMail();