const router = require(`express`).Router()
const Car = require (`../models/car`)

router.get (`/`, async (req,res) =>{
    try {
        const cars = await Car().find()
        res.json(cars)
        } catch (error) {
            console.log(error)
            res.status(400).json({'message':'error creating resources'})
        }
})

router.post ('/', async (req, res ) => {
    try {
    const car = await new Car(req.body).save()
    res.json(car)
    } catch (error) {
        console.log(error)
        res.status(400).json({'message':'error creating resource'})
    }


})


module.exports = router