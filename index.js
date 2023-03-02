const express = require(`express`)
const mongoose = require(`mongoose`)
require (`dotenv`).config()

const carRoutes= require ('./controllers/car')
const pokemonRoutes =require ('./routes/pokemon')

const app = express()

//MiddleWares
app.use(express.json())

//Routes
app.use('/car',carRoutes)
app.use('/pokemon', pokemonRoutes)

// db connection
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT

app.listen (PORT, console.log(`listening on port ${PORT}`))