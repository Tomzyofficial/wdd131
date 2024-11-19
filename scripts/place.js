const d = new Date();
const fullyear = d.getFullYear();

document.getElementById("currentyear").innerHTML = fullyear;
document.getElementById("lastModified").innerHTML = document.lastModified;

// Weather function
const temperature = 10;
const windSpeed = 6;

const calculateWindChill = (temp, speed) => {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);
}

function displayWindChill() {
  const weatherElement = document.querySelector("#weather");
  let windChill = "N/A";
  if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed);
  }

  weatherElement.textContent = `${windChill} `;
}

window.onload = displayWindChill;
