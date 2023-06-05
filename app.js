const temperature = document.querySelector(".temperature");
const countryElement = document.querySelector(".country");
const locationElement = document.querySelector(".location");
const descriptionElement = document.querySelector(".description");
const weathericonElement = document.querySelector(".weather-icon");

const getWeather = async () => {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=new york&appid=e8fd275a64164113eaf7a4b85fdfb157&units=metric"
    );
    const data = await response.json();
    const countryName = data.city.country;
    countryElement.innerHTML = countryName;
    const cityName = data.city.name;
    locationElement.innerHTML = cityName;
    const tempDescription = data.list[0].main.temp;
    temperature.innerHTML = tempDescription;
    const weatherDesciption = data.list[0].weather[0].description;
    descriptionElement.innerHTML = weatherDesciption;
  } catch (error) {
    console.log(error);
  }
};

getWeather();
