const mongoose = require(`mongoose`)

const carSchema = new mongoose.Schema({
    brand : {
        type: String,
        required: true
    },
    model : {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true,
        enum: ['white', 'black', 'grey']
    },
    price: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model(`car`, carSchema)