var mongoose = require('mongoose')
var Schema = mongoose.Schema

const messageSh = new Schema({
    name :{
        type : String,
    },
    email :{
        type : String,
    },
    message :{
        type : String,
    },
    date: { type: Date, default: Date.now }
})


const Message = mongoose.model('Message', messageSh)

module.exports = Message;