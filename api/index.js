const express =  require('express');
const app = express();
const cors = require('cors')
const axios = require('axios')
const mongoose = require('mongoose');
require('dotenv').config();



const OPENWEATHER_API_KEY = 'b92d22c95010687393d6268111573a0f';

async function addToDatabase(req){
await mongoose.connect(process.env.MONGO_URL);
const{weather_description,temperature,humidity,clouds} =req.body;
const weather =new

}


app.use(express.json());

const FetchWeatherData = async(city) =>{
    // need to find a away to turn the city into lat and long co-ordinates.
    const url = process.env.OPEN_WEATHER_API_URL;

}

app.get('/api/test', (req, res) => {
    res.json('test ok')
})

app.get('/api/weather/:city',async (req, res) => {
    const city = req.params.city;

    try{
        const weather = await fetch()
    }
    catch(error){

    }
})

app.listen(4000);

