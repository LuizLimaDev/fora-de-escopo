import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: process.env.MAIL_SERVER,
  port: 2525,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export default transport;
