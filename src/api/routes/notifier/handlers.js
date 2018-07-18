import sendEmail from "../../../services/mail";
import getProfile from "../../../services/github-api";
import getWeather from "../../../services/openweathermap-api";

export const sendNotify = async ctx => {
  const text = ctx.query.text;

  const logins = ctx.query.logins.split(',');
  var notifyLogs = [];

  for (var i = 0; i < logins.length; i++) {
    var notifyLog = {
      status: true 
    };

    try {
      const githubProfile = await getProfile(logins[i]);
      console.log(githubProfile);
    } catch (err) {
      notifyLog['status'] = false;
      continue;
    }

    try {
      const cityWeather = await getWeather(githubProfile.data.location);
      console.log(cityWeather);
    } catch (err) {
      notifyLog['status'] = false;
      continue;
    }

    try {
      sendEmail(
        githubProfile.email, 
        {
          text: text,
          weather: cityWeather.data.weather.main
        }
      )
    } catch (err) {
      notifyLog['status'] = false;
      continue;
    }

    notifyLogs.push(notifyLog);
  }

  ctx.body = notifyLogs;
};