const searchedCityNames = [];
const errorElement = document.getElementById("error");

// Executes when onclick
function changeFieldColor() {
    let ele = document.getElementById("city-name");
    ele.style.background = "rgb(186, 184, 186)";
}

// Executes when onchange
function capitalizeInput() {
    let ele = document.getElementById("city-name");
    ele.value = ele.value.toUpperCase();
}

// Executes when onmouseover
function bigButton(searchButton) {
    searchButton.style.width = "50%";
}

// Executes when onmouseout
function normalButton(searchButton) {
    searchButton.style.width = "30%";
}

// Function used to display the data in the webpage
function displayWeatherDetails(cityName, humidityLevel, temperature, seaLevel, description) {
    searchedCityNames.push(cityName);
    // console.log(searchedCityNames);
    const detailsElement = document.getElementById("details");
    // Add the data to the webpage
    detailsElement.innerHTML = `
        <div class="inner-div">City name      = ${cityName}</div>
        <div class="inner-div">Temperture     = ${temperature} °C</div>
        <div class="inner-div">Sea Level      = ${seaLevel} hPa</div>
        <div class="inner-div">Humidity Level = ${humidityLevel} %</div>
        <div class="inner-div">Description    = ${description}</div>
    `
}


// This function is used to filter only the necessary data from the API
function filterWeatherData(weatherData) {
    const cityName = weatherData.name;
    const humidityLevel = String(weatherData.main.humidity);
    const temperature = String(weatherData.main.temp);
    const seaLevel = String(weatherData.main.sea_level);
    const description = weatherData.weather[0].description;
    displayWeatherDetails(cityName, humidityLevel, temperature, seaLevel, description);
}


// Function is used to get the data from Open weather API
function getWeatherData(city) {
    const apiKey = "8863d3c67f7f93ce36b9fd60abff5206"
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`;

    let weatherData;

    // Used to fetch data from API
    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        weatherData = data;
        // console.log(weatherData);
        filterWeatherData(weatherData);
    })
    .catch(error => {
        errorElement.innerText = "Enter valid city name!!";
        errorElement.style.display = "block";
        console.error('Error in city name:', error);
    });
}

// Starting function
function main() {
    const form = document.getElementById("form");
    const city = document.getElementById("city-name");

    // Event listener for submitting a form
    form.addEventListener("submit", (e) => {
        errorElement.style.display = "none";
        e.preventDefault();
        let errorMessages = [];
        
        // Form validation
        if (city.value === "" || city.value == null) {
            errorMessages.push("City name is required");
        }
        if (errorMessages.length > 0) {
            errorElement.style.display = "block";
            errorElement.innerText = errorMessages.join(", ");
        }
        getWeatherData(city.value);
    })
}

// Window onload function
window.onload = function() {
    main();
}


