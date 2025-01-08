// // Selection Part
const inputBox = document.querySelector(".inputBox");
const searchButton = document.querySelector(".searchButton");
const weatherImg = document.querySelector(".weatherImg");

// Main Weather Function
async function checkWeather(city) {
  try {
    const response1 = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=6fea2995a26a689bdb5ca8a77bcf5475`
    );

    let data1 = await response1.json();
    console.log(data1);
    console.log(data1[0].lat);
    console.log(data1[0].lon);
    const response2 = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${data1[0].lat}&lon=${data1[0].lon}&units=metric&appid=6fea2995a26a689bdb5ca8a77bcf5475`
    );
    let data2 = await response2.json();
    console.log(data2);

    document.querySelector(".details1").style.display = "flex";
    document.querySelector(".details2").style.display = "flex";
    document.querySelector(".city").innerHTML = data2.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data2.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML = data2.main.humidity + "%";
    document.querySelector(".condition").innerHTML = data2.weather[0].main;
    document.querySelector(".wind").innerHTML = data2.wind.speed + "km/h";

    if (data2.weather[0].main == "Clear") {
      weatherImg.src = "images/clear.png";
    } else if (data2.weather[0].main == "Clouds") {
      weatherImg.src = "images/clouds.png";
    } else if (data2.weather[0].main == "Drizzle") {
      weatherImg.src = "images/drizzle.png";
    } else if (data2.weather[0].main == "Fog") {
      weatherImg.src = "images/mist.png";
    } else if (data2.weather[0].main == "Rain") {
      weatherImg.src = "images/rain.png";
    } else if (data2.weather[0].main == "Snow") {
      weatherImg.src = "images/snow.png";
    }
  } catch (error) {
    console.error(error.message);
    document.querySelector(".details1").style.display = "none";
    document.querySelector(".details2").style.display = "none";
    document.querySelector(".errorMessage").innerHTML =
      "Could not find data :(";
  }
}

// Function to start the system
searchButton.addEventListener("click", () => {
  checkWeather(inputBox.value);
  console.log(inputBox.value);
  document.querySelector(".errorMessage").innerHTML = "";
});
