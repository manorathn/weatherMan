var APIKey = "755698a01aadc8718cf3f3e6430192ff"
var openWeather = "https://api.openweathermap.org/data/2.5/weather?q="

var searchEl = document.querySelector("#searchBtn");
var currentCity = document.querySelector("#citySearch");


function getCityWeather(event) {
    event.preventDefault();

    var weatherUrl = openWeather + currentCity.value + "&units=imperial&appid=" + APIKey;
    console.log(weatherUrl);

    fetch(weatherUrl)

        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            // // Image
            var icon = document.querySelector(".image");
            // console.log(img);
            icon.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
            console.log(data.weather[0].icon);


            // city
            var city = document.querySelector(".city");
            console.log(city);
            city.textContent = data.name;
            console.log(data.name);

            // city
            var city = document.querySelector(".city");
            console.log(city);
            city.textContent = data.name;
            console.log(data.name);

            // date
            var date = document.querySelector(".date");
            var day = new Date().toLocaleDateString()
            date.textContent = "(" + day + ")";
            console.log(day);

            // temp
            var temp = document.querySelector(".temp");
            temp.textContent = "Temp: " + data.main.temp + "°F";
            console.log(data.main.temp)

            // humidity
            var humidity = document.querySelector(".humidity")
            humidity.textContent = "Humidity:" + " " + data.main.humidity + "%";
            console.log(humidity);

            // windSpeed
            var windSpeed = document.querySelector(".windSpeed")
            windSpeed.textContent = "Wind Speed:" + " " + data.wind.speed + "mph";
            console.log(windSpeed);

            // UV Index
            var uvIndex = document.querySelector(".uvIndex")
            uvIndex.textContent = "UV Index:";
            console.log(windSpeed);
        })
};

// LocalStorage Setup


searchEl.addEventListener("click", getCityWeather);
