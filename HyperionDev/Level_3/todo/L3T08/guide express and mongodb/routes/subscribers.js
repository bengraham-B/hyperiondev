const express = require('express')
const router = express.Router()

const Subscriber = require('../models/subscriber')
const subscriber = require('../models/subscriber')

//^ Getting All
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (err) {
        res.status(500).json({message: err.message})
    }

})



//~ Getting one
//~ <getSubscriber> - middleware
router.get('/:id', getSubscriber, (req, res) => {
    res.json(res.subscriber)


})




//* Creating One
router.post('/', async (req, res )=> {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })

    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)

    } catch (err) {
        res.status(400).json({message: err.message})

    }

})

//? Updating One
router.patch('/:id', getSubscriber, (req, res) => {

})

//! Deleteing One 
router.delete('/:id', getSubscriber, async (req, res) => {
    try {
        const deleteSuscriber = await subscriber.remove({_id:req.params.id});
        res.json(deleteSuscriber);

    } catch (err) {
        res.status(500).json({message: err.message})
    }

    
})

async function getSubscriber(req, res, next) {
    let subscriber
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if(subscriber == null){
            return res.status(404).json({message: "Cannont find sub"})
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })

    }

    res.subscriber = subscriber
    next()

}

module.exports = router