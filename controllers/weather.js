// IMPORTS
const { get } = require("https");
const { stringify } = require("querystring");

// CONTROL FUNCTIONS
// get weather
const getWeather = (req, res) => {
    // destructure persistence data from req query
    const { perst, city, temp, imageCode, description } = req.query;

    // render get weather view with optional perst
    res.render("weather", {
        title: "Weather",

        perst,
        city,
        temp,
        imageCode,
        description,
    });
};

const postWeather = (req, res) => {
    try {
        // destructure city name from req.body
        const { city } = req.body;
        // set api url and params variable
        const appID = process.env.OPENWEATHERAPIKEY;
        const units = "metric";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appID}&units=${units}`;

        // make request to weather API
        get(url, (resp) => {
            // on data (received) event
            resp.on("data", (data) => {
                // parse received data
                const parsedData = JSON.parse(data);
                console.log(parsedData);

                // redirect to weather view with necessary data in query string
                try {
                    res.redirect(
                        "/weather?" +
                            stringify({
                                perst: true,
                                city: parsedData.name,
                                temp: parsedData.main.temp,
                                imageCode: parsedData.weather[0].icon,
                                description: parsedData.weather[0].description,
                            })
                    );
                } catch (error) {
                    console.log(error);
                    res.redirect("/weather?" + stringify({ perst: "error" }));
                }
            });
        });
    } catch (error) {
        console.log(error);
    }
};

// EXPORTS
module.exports = { getWeather, postWeather };
