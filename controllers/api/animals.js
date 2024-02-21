const Animal = require('../../models/animal')


module.exports = {
    create,
    index,
    update,
    destroy,
    jsonAnimals,
    jsonAnimal
}

function jsonAnimal (_, res) {
    res.json(res.locals.data.animal)
}

function jsonAnimals (_, res) {
    res.json(res.locals.data.animals)
}

async function create(req, res, next){
    try {
        const animal = await Animal.create(req.body)
        res.locals.data.animal = animal
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

async function index(_, res ,next) {
    try {
        const animals = await Animal.find({})
        res.locals.data.animals = animals
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

async function update(req ,res,next) {
    try {
        const animal = await Animal.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.locals.data.animal = animal
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

async function destroy(req ,res,next) {
    try {
        const animal = await Animal.findByIdAndDelete(req.params.id)
        res.locals.data.animal = animal
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
