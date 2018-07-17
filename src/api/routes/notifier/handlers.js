import sendEmail from "../../../services/mail";
import getProfile from "../../../services/github-api";
import getWeather from "../../../services/openweathermap-api";

export const sendNotify = async ctx => {
  const text = ctx.query.text;

  var logins = ctx.query.logins.split(',');
  var logs = [];

  for (let i = 0; i < logins.length; i++) {
    try {
      let githubProfile = await getProfile(logins[i]);
    } catch (err) {
      statuses[logins[i]].push(
        { status: false, 
          reason: err
        }
      );
    }

    try {
      let cityWeather = await getWeather(githubProfile.data.location);
    } catch (err) {
      statuses[logins[i]].push(
        { status: false, 
          reason: err
        }
      );
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
      statuses[logins[i]].push(
        { status: false, 
          reason: err
        }
      );
    }
  }

  ctx.body = {
    status: "ok"
  };
};


const setStatus = ctx => {
  

}