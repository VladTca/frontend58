const loader = document.querySelector('.loader')

async function getCoordinates() {

  const res = await fetch(`https://get.geojs.io/v1/ip/geo.json`);
  const data = await res.json();
  const latitude = data.latitude;
  const longitude = data.longitude;
  const city = data.city;
  //console.log(latitude, longitude, city)
  const weather = document.querySelector(".weather");
  document.getElementById("latitude").textContent= `широта = ${latitude}`
  document.getElementById("longitude").textContent= `долгота = ${longitude}`
  document.getElementById("city").textContent= `город = ${city}`
  getWeather(latitude, longitude, city)
}

async function getWeather(latitude, longitude, city) {
  const res1 = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
  const data1 = await res1.json();
  console.log(data1)
  const currentWeather =data1.current_weather
  const currentWeatherUnits = data1.current_weather_units
  const temperature = currentWeather.temperature
  const windspeed = currentWeather.windspeed
  const weathercode = currentWeather.weathercode
  function weatherStyle(weathercode){
    switch(weathercode){
      case 0: return "Clear sky";
      case 1: return "Mainly clear";
      case 2: return "Partly cloudy";
      case 3: return "Overcast";

    }
  }

  document.getElementById("temperature").textContent = `температура =${temperature} ${currentWeatherUnits.temperature}`
  document.getElementById("windspeed").textContent = `скорость ветра =${windspeed} ${currentWeatherUnits.windspeed}`
  document.getElementById("weathercode").textContent = `погода =${weatherStyle(weathercode)}`
  loader.classList.toggle('hide')

}
setTimeout(getCoordinates, 1500)