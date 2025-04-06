const mongoose = require('mongoose')
const{Schema,model} = require('mongoose')

const WeatherSchema = new Schema({
 weather_description : {type:String, required:true},
 temperature : {type:String, required:true},
 humidity : {type:String, required:true},
 clouds : {type:String, required:true}
 // IDK we can add more
});
const WeatherModel = model('Weather',WeatherSchema);
module.exports = WeatherModel;

