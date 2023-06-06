const searchWeather = document.getElementById("location-form");
const weatherBtn = document.getElementById("searchbtn");
const weatherResult = document.getElementById("weather-result");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3a253cb5bemshf34d8e65a43a7e6p1a7561jsne18149920743",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

const getWeather = async () => {
  const title = searchWeather.querySelector("#location-input").value;
  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${encodeURIComponent(
    title
  )}`;

  if (title.trim().length < 3) {
    weatherResult.innerHTML = "<p>Please enter at least 3 characters. 🙏</p>";
    weatherResult.style.backgroundColor = "#fff";
    return;
  }

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    if (!data.location) {
      weatherResult.innerHTML =
        "<p>Location not found. Please enter a valid location. 😿</p>";
      weatherResult.style.backgroundColor = "#fff";
      return;
    } else {
      weatherResult.innerHTML = `<span>Country: ${data.location.country}</span> 
      <p>City: ${data.location.name}</p>
      <p>Localtime: ${data.location.localtime}</p>
      <span>Temp: ${data.current.temp_c}&#8451;</span>`;
      weatherResult.style.backgroundImage = `url(${data.current.condition.icon})`;
      weatherResult.style.backgroundColor = "#fff";
    }
  } catch (error) {
    console.log(error);
  }
};

searchWeather.addEventListener("submit", (e) => {
  e.preventDefault();
  getWeather();
});

weatherBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather();
});
