const mongoose = require("mongoose")

const { Schema } = mongoose;


const orderschema = new Schema({
    email: {
        type: String,
    
    },
    orderdata:{
        type: Array,
        required:true
    }
})

module.exports = mongoose.model('orders',orderschema);