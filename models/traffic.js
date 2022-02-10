var mongoose = require('mongoose')
var Schema = mongoose.Schema

const trafficSh = new Schema({
    ip :{
        type : String,
    },
    time: {
        type: String,
    },
    location: {
        type: String,
    },
    date: { type: Date, default: Date.now }
})


const Traffic = mongoose.model('Traffic', trafficSh)

module.exports = Traffic;