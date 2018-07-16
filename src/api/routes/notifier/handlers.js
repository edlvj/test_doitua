import sendEmail from "../../../services/mail";
import getProfile from "../../../services/github-api";
import getWeather from "../../../services/openweathermap-api";

export const sendNotify = async ctx => {
  const text = ctx.query.text;

  var logins = ctx.query.logins.split(',');
  const promises = [];

  for (let i = 0; i < logins.length; i++) {
    let githubProfile = await getProfile(logins[i]);

    let cityWeather = await getWeather(githubProfile.data.location);
    return cityWeather;

    // promises.push(
    //   sendEmail(
    //     profile.email, 
    //     {
    //       weather: cityWeather.weather.main
    //     }
    //   )
    // );
  }

 // await Bluebird.all(promises);
 // */
  ctx.body = {
    status: "ok"
  };
};