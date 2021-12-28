const nodemailer = require("nodemailer");
const config = require("./values");

exports.mail = nodemailer.createTransport({
  host: config.service,
  port: config.port,
  auth: {
    user: config.umail,
    pass: config.upass,
  },
});
