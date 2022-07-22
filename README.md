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


## Environment
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

## Build Tools


![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
<img width="100px" alt="AXIOS" src="https://user-images.githubusercontent.com/8939680/57233884-20344080-6fe5-11e9-8df3-0df1282e1574.png">
<img width="100px" alt="AXIOS" src="https://user-images.githubusercontent.com/110953/28352645-7a8a66d8-6c0c-11e7-83af-752609e7e072.png">

## API

- [geoNames API](http://www.geonames.org/export/web-services.html)
- [Weatherbit API](https://www.weatherbit.io/api)
- [Pixabay API](https://pixabay.com/api/docs/)
- [restCountry API](https://restcountries.com/)


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

Command | Action
:------------: | :-------------:
`npm run build-prod` | Build project
`npm start` | Run project
`npm run build-dev` | develope project



## View the project

- [local](http://localhost:7777/)
- [Netlify](https://travel-app-Qin.netlify.app)

## Special Thanks

- ["Promise chaining is dead. Long live async/await - LogRocket Blog" ]( https://blog.logrocket.com/promise-chaining-is-dead-long-live-async-await-445897870abc/)
- ["Axios vs. fetch(): Which is best for making HTTP requests? - LogRocket Blog" ](https://blog.logrocket.com/axios-vs-fetch-best-http-requests/)
- [How to store objects in HTML5 localStorage](https://stackoverflow.com/questions/2010892/how-to-store-objects-in-html5-localstorage)
- [How to use Local Storage with JavaScript](https://www.youtube.com/watch?v=AfVUiQ-my4Q&t=1462s)
- [Background image]( https://www.dreamstime.com/travel-accessories-light-blue-background-getting-ready-summer-vacation-d-rendering-image150871769)
- [markdown-badges](https://ileriayo.github.io/markdown-badges/)


## Extras
Adding new features, fixing bugs or any other questions,Please feel free to contact me: **Yanqin Q** (*yq.qualmann@gmail.com*)

