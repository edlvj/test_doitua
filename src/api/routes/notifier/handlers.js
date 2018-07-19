import sendEmail from "../../../services/mail";
import getProfile from "../../../services/github-api";
import getWeather from "../../../services/openweathermap-api";

export const sendNotify = async ctx => {
  const text = ctx.query.text;

  const logins = ctx.query.logins.split(',');
  var notifyLogs = [];
  
  for (var i = 0; i < logins.length; i++) {
    var notifyLog = {
      status: true,
      message: 'ok'
    };

    try {
      var githubProfile = await getProfile(logins[i]);
    } catch (err) {
      notifyLog['status'] = false;
      notifyLog['message'] = 'Invalid github name or private email';
    }

    try {
      var cityWeather = await getWeather(githubProfile.data.location);
    } catch (err) {
      notifyLog['status'] = false;
      notifyLog['message'] = 'Wrong location or no info about weather';
    }

    try {
      sendEmail(
        githubProfile.data.email, 
        {
          text: text,
          weather: cityWeather.data.weather[0].main
        }
      )
    } catch (err) {
      notifyLog['status'] = false;
      notifyLog['message'] = 'Email not sended';
    }

    notifyLogs.push(notifyLog);
  }

  ctx.body = notifyLogs;
};