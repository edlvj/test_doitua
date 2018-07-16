import sendEmail from "../../../services/mail";
import getProfile from "../../../services/github-api";
import getWeather from "../../../services/openweathermap-api";

export const sendNotify = async ctx => {
  const text = ctx.params.text;

  var logins = ctx.params.logins.split(',');
  const promises = [];

  console.log(text);
  console.log(logins);
  /*  
    
    for (let i = 0; i < logins.length; i++) {
      let githubProfile = await getProfile(logins[0]);
      let cityWeather = await getWeather(githubProfile.location);
      promises.push(
        sendEmail(
          profile.email, 
          {
            weather: cityWeather.weather.main
          }
        )
      );
    }

    await Bluebird.all(promises);
  */
  ctx.body = {
    status: "ok"
  };
};