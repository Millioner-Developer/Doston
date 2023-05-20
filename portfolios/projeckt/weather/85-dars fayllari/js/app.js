const changeLocation = document.getElementById('change-location')
const card = document.getElementById('card')
const details = document.getElementById('details')
const weatherIcon = document.getElementById('weather-icon')
const overlay = document.getElementById('overlay')


const updateUI = (weather) => {
    console.log(weather);
    details.innerHTML = `
    <h5 class="mb-3">${weather.name}, ${weather.sys.country}</h5>
          <p class="mb-3">${weather.weather[0].main}</p>
          <div class="display-4 mb-3">
            <span>${Math.round(weather.main.temp) - 270}</span>
            <span>&deg;C</span>
          </div>
    `
}


const getWeather = async (city) => {
    const data = await getData(city)

    return data
}

changeLocation.addEventListener("submit", (e) => {
    e.preventDefault()
    const cityName = changeLocation.city.value.trim()
    changeLocation.reset()
    getWeather(cityName).then((data) => updateUI(data))
})