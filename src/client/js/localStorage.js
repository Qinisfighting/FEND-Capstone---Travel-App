import axios from "axios";

//save trip

async function saveTrip() {
  try {
    const allData = await axios.get("http://localhost:7777/all");
    console.log(allData);
    localStorage.setItem("savedTrip", JSON.stringify(allData));
    showSavedTrip();
  } catch (error) {
    console.log("localStorage error", error);
  }
}

//show saved trip

function showSavedTrip() {
  document.getElementById("deleteTrip").style.display = "none";
  const data = localStorage.getItem("savedTrip");

  if (data != null) {
    const dataJson = JSON.parse(data);
    console.log(dataJson);
    if (dataJson.data != null) {
      let tripIMG2 = `<div id="tripIMG2" alt="Location"><img src="${dataJson.data.image.image_url} alt="${dataJson.data.image.image_alt}"></div>`;              
      let tripText2 = `<div id=tripText2><p>${dataJson.data.weather.datetime}</p>
               <h3>${dataJson.data.geo.cityName}, ${dataJson.data.geo.countryName}</h3>  
               <p>${dataJson.data.weather.min}°C to ${dataJson.data.weather.max}°C</p>
               <p>${dataJson.data.weather.description} <img src="https://www.weatherbit.io/static/img/icons/${dataJson.data.weather.icon}.png"></p>
               <div><p>Memo:</p>${dataJson.data.memo}</div></div>`;
      //html += `<div id="tripIMG" alt="Location"><img src="${dataJson.data.imageC.image_url} alt="${dataJson.data.imageC.image_alt}"></div>

      document.getElementById(
        "tripImage2"
      ).innerHTML = `<div>${tripIMG2}</div>`;
      document.getElementById(
        "tripText2"
      ).innerHTML = `<div>${tripText2}</div>`;
      document.querySelector(".savedEntry").style.display = `block`;
      document.getElementById("deleteTrip").style.display = "block";
    } else {
      document.querySelector(".savedEntry").innerHTML = `<p>No Data</p>`;
      document.querySelector(".savedEntry").style.display = `none`;
      document.getElementById("deleteTrip").style.display = "none";
    }
  }
}

//delete trip
function deleteTrip(event) {
  event.preventDefault();
  localStorage.clear();
  document.querySelector(".showEntry").style.display = "none";
  location.reload();
  showSavedTrip();
  return force;
}

export { saveTrip, deleteTrip, showSavedTrip };
