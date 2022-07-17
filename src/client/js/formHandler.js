import axios from "axios";

function handleSubmit(event) {
  event.preventDefault();
  const location = document.getElementById("location").value; 
  const depart = new Date(document.getElementById("datum1").value);
  const end = new Date(document.getElementById("datum2").value);
  const notes = document.getElementById("notes").value;
  
  //hide the submit result block before submit happens
  const entry = document.querySelector(".showEntry");
  if (entry.style.display === "none"){
    entry.style.display = "none";
  } else if (location == false) { 
    alert("Destination is required." )  
    return
  } else {
    entry.style.display ="block"; 
    //add a loader
    document.querySelector("#loading").classList.replace("hidden","showing");
    setTimeout(function(){
    document.querySelector("#loading").classList.replace("showing","hidden");
  }, 1200);
  }
  
  //trigger the next two functions when the submit button is clicked
  const daysToGo = getDayData(depart,end);
  postTrip(location,daysToGo,notes);
  daysToGo;
}

// calculate how many days till departure and the trip length, and write in the UI
function getDayData(depart,end) {

  const now = new Date().getTime();
  let departToShow = new Date(document.getElementById("datum1").value).toDateString();
  let endToShow = new Date(document.getElementById("datum2").value).toDateString();
  let daysAway = Math.floor((depart.getTime() - now) / (1000 * 60 * 60 * 24));
  let tripLength = Math.floor((end.getTime() - depart.getTime()) / (1000 * 60 * 60 * 24));


  setTimeout(function(){
  document.getElementById('triplength').innerHTML = `<p>Depart: ${departToShow}</p> <p>Return: ${endToShow}</p>`;
  document.getElementById('daystogo').innerHTML = `<p>This trip lasts ${tripLength} day(s), is ${daysAway} day(s) away</p>`;
  }, 1200);

  return daysAway 
  }


  // post the user submit data to the server
const postTrip = async(location = '',  daysToGo = '', notes ='') => {
  const res = await fetch('http://localhost:7777/addData', {
      method: 'POST',
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({location, daysToGo, notes}),
      })

      if (res.status >= 400 && res.status < 600) {
        throw new Error("Bad response from server");
      }
      updateUI(daysToGo);
      }  


// write the ready API data from server in UI, according to two diffenrent situations from user date select
const updateUI = async(daysToGo) => {
  const locationToShow = document.getElementById("location").value.charAt(0).toUpperCase() + document.getElementById("location").value.slice(1) ; 
  if( daysToGo >= 0 && daysToGo <= 16) {

      try {
          const allData = await axios.get('http://localhost:7777/all')
          
          document.getElementById('name').innerHTML = `<p>My trip to: ${locationToShow}, ${allData.data.geo.countryName} </p>`
          document.getElementById('temp').innerHTML = `<p>Typical weather for then: ${allData.data.weather.min}°C to ${allData.data.weather.max}°C</p>`; 
          document.getElementById('icon').innerHTML = `<p>${allData.data.weather.description} mostly   <img src="https://www.weatherbit.io/static/img/icons/${allData.data.weather.icon}.png"></p>`;
          document.getElementById('memo').innerHTML = `<p>Memo: ${allData.data.memo}</p>`;
          document.getElementById('tripIMG').innerHTML = `<img src="${allData.data.image.image_url} alt="${allData.data.image.image_alt}">`;
       
         return

      } catch(error) {
          console.log("error", error);
      }
  } else {
      alert("For a proper submit response, please select a date within the next 16 days.")

      try {
          const allData = await axios.get('http://localhost:7777/all')

          document.getElementById('name').innerHTML = `<p>My trip to: ${locationToShow}, ${allData.data.geo.countryName} </p>`
          document.getElementById('temp').innerHTML = `<p>Current weather: ${allData.data.weather.temp}°C, feels ${allData.data.weather.feels}°C </p>`;
          document.getElementById('icon').innerHTML = `<p>${allData.data.weather.description} mostly   <img src="https://www.weatherbit.io/static/img/icons/${allData.data.weather.icon}.png"></p>`;
          document.getElementById('memo').innerHTML = `<p>Memo: ${allData.data.memo} </p>`;
          document.getElementById('tripIMG').innerHTML = `<img src="${allData.data.image.image_url} alt="${allData.data.image.image_alt}">`;
          
          return 

      } catch(error) {
          console.log("error", error);
      }
    }
}



export { handleSubmit }










