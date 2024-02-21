const { model, Schema } = require('mongoose')


const animalSchema = new Schema ({
    name: { required: true, type: String },
    species: { required: true, type: String },
    image: { requird: true, type: String },
    reservedForAdoption: { default: false, type: Boolean }
}, {
    timestamps: true
})

const Animal = model('Animal', animalSchema)

module.exports = Animal