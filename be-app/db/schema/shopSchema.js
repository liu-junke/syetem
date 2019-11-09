const mongoose = require('mongoose')

const shopSchema = new mongoose.Schema({
    id: String,
    name: String,
    address: String,
    phone: String,
    info: String,
    slogan: String,
    feature: String,
    category: String,
    delivery: String,
    price: String,
    startTime: String,
    endTime: String,
    logoUrl: String,
    manageUrl: String,
    diningUrl: String
})

module.exports = shopSchema