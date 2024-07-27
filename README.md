# Weather API Fetch and Display Code

This JavaScript code fetches the current weather data for a specified city from the OpenWeatherMap API and displays it on a web page.

### Section 1: Event Listener and API Request

```javascript
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
            console.log(data); // log the received data
            displayWeather(data);
        })
        .catch(error => console.error('Error fetching weather:', error));
}
```
- The code adds an event listener to the `document` object, waiting for the `DOMContentLoaded` event to trigger the `fetchWeather` function.
- `fetchWeather` sends a GET request to the OpenWeatherMap API with the city name (`London`) and API key.
- The `fetch` promise chain:
- Checks if the response is OK (200-299 status code). If not, throws an error.
- Parses the response data as JSON.
- Logs the received data to the console.
- Calls the `displayWeather` function to render the weather data.
- Catches any errors that occur during the fetch or parsing process.

### Section 2: Displaying the Weather Data

```javascript
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
```
- This function takes the parsed weather data as an argument.
- Retrieves the `content` element from the DOM.
- Creates a new `div` element with a class of `weather my-3`.
- Sets the inner HTML of the `div` to a template string containing:
    - The city name.
    - The current temperature.
    - A brief description of the weather.
- Appends the `div` to the `content` element.

In summary, this code fetches the current weather data for London from the OpenWeatherMap API and displays it on a web page using a dynamically created `div` element.