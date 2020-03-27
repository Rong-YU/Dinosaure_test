const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name: {type : String, default: ''},
    username: {type: String},
    age: {type: Number, default: 0},
    famille: {type : String, default: ''},
    race: {type : String, default: ''},
    nourriture: {type: String, default: ''},
    amis: [
        {
            type: mongoose.SchemaTypes.ObjectId, ref: 'Dinosaure', default: null
        }
    ],
    password: {type : String},
    sessionKey: {type : String}
})

module.exports = mongoose.model('Dinosaure', schema)