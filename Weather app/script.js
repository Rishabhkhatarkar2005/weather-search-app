
const apiKey = "bd5e378503939ddaee76f12ad7a97608"

async function getWeather() {

    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temperature").innerText =
            `Temperature: ${data.main.temp} °C`;

        document.getElementById("description").innerText =
            `Weather: ${data.weather[0].description}`;

        document.getElementById("humidity").innerText =
            `Humidity: ${data.main.humidity}%`;

        document.getElementById("wind").innerText =
            `Wind Speed: ${data.wind.speed} km/h`;

    } catch (error) {

        alert(error.message);

    }
}
