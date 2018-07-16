import nodemailer from "nodemailer";
import { email } from "../config";

const transporter = nodemailer.createTransport({
  host: email.host,
  port: 465,
  auth: {
    user: email.username,
    pass: email.password
  }
});

const serviceEmail = options => {
  return {
    from: "Test email <hello@testdoit.com>",
    subject: `You got test message.`,
    html: `Your Weather is ${options.weather}`
  };
};

export default function sendEmail(receiver, property = null) {
  var options = serviceEmail(property);
  options.to = receiver;

  transporter.sendMail(options, (error, info) => {
    if (error) {
      reject(error);
    } else {
      resolve(info);
    }
  });
}
  