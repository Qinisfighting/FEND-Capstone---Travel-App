
const dotenv = require("dotenv");
dotenv.config();

let path = require("path");

const fetch = require("node-fetch");

const axios = require('axios');

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.sendFile("dist/index.html");
});

app.get('/all', (req,res) => {
  res.send(projectData);   
 });

app.listen(7777, () => {
  console.log('Example app listening on port 7777!')
})

// Setup empty JS object to act as endpoint for all routes
projectData = {};

//base URL and API username or keys 
const geoUsername = process.env.geoUsername;
console.log(`Your Geonames Username is ${process.env.geoUsername}`);
const geoBaseURL = 'http://api.geonames.org/searchJSON?q';

const weatherAPIKey = process.env.weatherAPIKey;
console.log(`Your Weatherbit API key is ${process.env.weatherAPIKey}`);
const weatherBaseURL_F = 'https://api.weatherbit.io/v2.0/forecast/daily?';
const weatherBaseURL_C = 'https://api.weatherbit.io/v2.0/current?';

const countryBaseURL = 'https://restcountries.com/v2/name/';

const pixAPIKey = process.env.pixAPIKey;
console.log(`Your Pixabay API Key is ${process.env.pixAPIKey}`);
const pixBaseURL = 'https://pixabay.com/api/?';

//geonames API call
const getGeo = async city => {
  const geoAllData = await axios.get(`${geoBaseURL}=${encodeURIComponent(city)}&maxRows=1&username=${process.env.geoUsername}`);
  
  try {
    const geoData = {
      lat: geoAllData.data.geonames[0].lat,
      lng: geoAllData.data.geonames[0].lng,
      countryName: geoAllData.data.geonames[0].countryName,
      }
      /* 
       if (geoData.countryName == "United States") {
        geoData.countryName = "USA";
          }   
       I try to add the code above, but it somehow has no effect at all. I want to pass name "USA" to restCountry API because with the name "United States",
       which is returned from geonames, restCountry API returns information of an Island called "United States", 
       Luckily seems besides this, other country names are working fine.
      */ 
      console.log(geoData)
      return geoData;
  } catch (error) {
    alert("city not found.")
    console.log("geo API error", error);
  }
};


//restcountry API call
const getCountry = async (Cname) => {
  const countryAllData = await axios.get(`${countryBaseURL}${Cname}`);


  try{
    
     const countryData = {

          flags: countryAllData.data[0].flags.png,
          name: countryAllData.data[0].name,
          nativeName:  countryAllData.data[0].nativeName,
          region:  countryAllData.data[0].region,
          population:countryAllData.data[0].population,
          area:countryAllData.data[0].area,
          timezones:countryAllData.data[0].timezones,
          population:countryAllData.data[0].population,
          callingCodes: countryAllData.data[0].callingCodes[0],
          languages: countryAllData.data[0].languages[0].name,
          currencies: countryAllData.data[0].currencies[0].name
       }
       console.log(countryData)
       return countryData


  }catch (error) {
    console.log("country API error", error);
 }
}




//weatherbit API call
const getWeather = async (lat, lng, dayLength) => {
  if (dayLength >= 0 && dayLength <= 16 ){
    const weatherAllData_F = await axios.get(`${weatherBaseURL_F}lat=${lat}&lon=${lng}&key=${weatherAPIKey}`);
    const daysToGoIndex = (dayLength + 1);

        try {
            const weatherData_F = {
                min: weatherAllData_F.data.data[daysToGoIndex].min_temp,
                max: weatherAllData_F.data.data[daysToGoIndex].max_temp,
                description: weatherAllData_F.data.data[daysToGoIndex].weather.description,
                icon: weatherAllData_F.data.data[daysToGoIndex].weather.icon,
            }
            console.log(weatherData_F)
            return  weatherData_F;    

      } catch (error) {
          console.log("weather API error", error);
      }

    //due to the free API limits, the user gets the current weather instead, when he choses a date in the past or in the future over 16 days
    } else {
    const weatherAllData_C = await axios.get(`${weatherBaseURL_C}lat=${lat}&lon=${lng}&key=${weatherAPIKey}`);
    try {

      const weatherData_C = {
          temp:  weatherAllData_C.data.data[0].temp,
          feels:  weatherAllData_C.data.data[0].app_temp,
          description: weatherAllData_C.data.data[0].weather.description,
          icon:  weatherAllData_C.data.data[0].weather.icon,
      }
      console.log(weatherData_C)
      return weatherData_C 

    } catch (error) {
         console.log("weather API error", error);
    }
  } 
}


// pixabay API call for country when city is obscure
const getImageC = async country => {
  const pixAllDataC = await axios.get(`${pixBaseURL}key=${pixAPIKey}&q=${encodeURIComponent(country)}&image_type=photo`);

  try {

      const pixDataC = {
          image_url:  pixAllDataC.data.hits[0].webformatURL,
          image_alt:  pixAllDataC.data.hits[0].tags
      }
      console.log(pixDataC)
      return pixDataC;

  } catch (error) {
      console.log("country image API error", error);
  }
}

// pixabay API call for city
const getImage = async city => {
  const pixAllData = await axios.get(`${pixBaseURL}key=${pixAPIKey}&q=${encodeURIComponent(city)}&image_type=photo`);

  try {

      const pixData = {
          image_url:  pixAllData.data.hits[0].webformatURL,
          image_alt:  pixAllData.data.hits[0].tags
      }
      console.log(pixData)
      return pixData;

  } catch (error) {
      console.log("city image API error", error);
  }
}



// post all data to front 
app.post('/addData', async (req, res) => {
  try {
      const city = req.body.location;
      const dayLength = req.body.daysToGo;
      const memo = req.body.notes;
      


      let geo = await getGeo(city);
      let country = await getCountry(geo.countryName);
      let weather = await getWeather(geo.lat, geo.lng, dayLength);
      let imageC = await getImageC(geo.countryName);
      let image =  await getImage(city);
                   
      
      
      const newEntry = {
          geo,
          country,
          weather,
          imageC,
          image,
          memo
          
      }

      projectData = newEntry;
      res.status(201).send(projectData);

  } catch(error) {
      console.log('error from server post route', error)
  }
})


