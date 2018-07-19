import nodemailer from "nodemailer";
import config from "../config";
import Bluebird from "bluebird";

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.email.username,
    pass: config.email.password
  }
});

const serviceEmail = options => {
  return {
    from: "Test email <hello@testdoit.com>",
    subject: `You got test message.`,
    html: `${options.text}. Your Weather is ${options.weather}`
  };
};

export default function sendEmail(receiver, property = null) {
  return new Bluebird((resolve, reject) => {
    var options = serviceEmail(property);
    options.to = receiver;

    transporter.sendMail(options, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info);
      }
    });
  });  
}
  