# Project FEND Capstone - Travel App


## Overview

The Capstone Project of Front End Web Developer Nanodegree Program from Udacity, aiming to create a web tool, with which user can enter the trip location, the departing date and personal notes (reminders, packing list...), to formulate a travel plan with weather forecast, an image of the location and personal notes.

## Extended functionalities:

- Add end date and display length of trip.
- Pull in an alternative image.  
- Integrate the REST Countries API to pull in data for the country being visited.
- Allow the user to remove the trip.
- Incorporate icons into forecast.
- A memo function which allows user to entry anything that is important.
- A print button an the left which allow user to print their trip.

## Demo

<img src="" width="1000"> 

## References and Sourses

- [geoNames API](http://www.geonames.org/export/web-services.html)
- [Weatherbit API](https://www.weatherbit.io/api)
- [Pixabay API](https://pixabay.com/api/docs/)
- [restCountry API](https://restcountries.com/)


## Environment

    - Node
    - Express    

## Build Tools

    - HTML
    - CSS/SCSS
    - Vanilla JavaScript
    - Web API 
    - axois
    - Webpack
    - Jest
    - Service Worker & Workbox

## Dependencies

    - cors
    - body-parser
    - Webpack Plugins and loaders 

## Installation 

- clone the project to local device

- make sure Node(v14.0.0) and npm(v6.14.4) are installed from the terminal, and run

   ```
   npm install
   ```

- by package compatibility issues, please install plugins and loaders with the proposed version set from [package.json](https://github.com/Qinisfighting/Project-FEND-Capstone---Travel-App/blob/main/package.json), and run

   ```
   npm i --legacy-peer-deps
   ```
    
## Start the project

- Sign up for the first three API ID/keys from the link above and make sure dotenv package is installed
- Create a .env file in the root of this Project and fill the file with the API keys 
```
geoUsername = *********
weatherAPIKey = *************************
pixAPIKey = *************************
```
- To build, run   `npm run build-prod` 
- To start, run  `npm start`


## View the project

- [local](http://localhost:7777/)
- [Netlify](https://travel-app-Qin.netlify.app)

## Special Thanks

- ["Promise chaining is dead. Long live async/await - LogRocket Blog" ]( https://blog.logrocket.com/promise-chaining-is-dead-long-live-async-await-445897870abc/)
- [Background image]( https://www.dreamstime.com/travel-accessories-light-blue-background-getting-ready-summer-vacation-d-rendering-image150871769)

## Extras
Adding new features, fixing bugs or any other questions,Please feel free to contact me: **Yanqin Q** (*yq.qualmann@gmail.com*)

