const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hardwareSpec = new Schema({
    model: { type:String, require: true, unique: true },
    ram: { type: String, required: true },
    clock: {type: String, required: true},
    driver: { type: String, required: true},
    memoryType: { type: String, required: true},
    powerSupply: { type: String, required: true}
})

module.exports = mongoose.model('Hardware', hardwareSpec);