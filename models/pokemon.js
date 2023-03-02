const mongoose = require(`mongoose`)

const pokemonSchema = new mongoose.schema ({
    pokemonID:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    
})