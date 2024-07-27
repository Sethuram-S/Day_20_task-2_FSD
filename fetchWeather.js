document.addEventListener('DOMContentLoaded', fetchWeather);

function fetchWeather() {
    const apiKey = '66d8ed4dabb7903acecc2da6d84b1bfe';
    const city = 'London';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data); //
            displayWeather(data);
        })
        .catch(error => console.error('Error fetching weather:', error));
}

function displayWeather(weatherData) {
    const content = document.getElementById('content');
    const div = document.createElement('div');
    div.className = 'weather my-3';
    div.innerHTML = `
        <h3>Weather in ${weatherData.name}</h3>
        <p>Temperature: ${weatherData.main.temp}°C</p>
        <p>Weather: ${weatherData.weather[0].description}</p>
    `;
    content.appendChild(div);
}
