import geocode from "./utils/geocode.js";
import forecast from "./utils/forecast.js";

const address = process.argv[2];

if (!address)
{
    console.log("Please provide a correct address!!");
    process.exit();
}

geocode.geoCode(address, (geoCodeError, { latitude, longitude, location } = {}) =>
{
    if (geoCodeError)
    {
        return console.log("Error", geoCodeError);
    }

    forecast.forecast(latitude, longitude, (forecastError, { weatherForecast } = {}) =>
    {
        if (forecastError)
        {
            return console.log("Error", forecastError);
        }

        console.log(location);
        console.log(weatherForecast);
    });
});