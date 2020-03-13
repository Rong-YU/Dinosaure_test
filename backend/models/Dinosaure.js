const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    user: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'},
    name: {type: String},
    age: {type: Number},
    famille: {type : String},
    race: {type : String},
    nourriture: {type: String},
    amis: [
        {
            type: mongoose.SchemaTypes.ObjectId, ref: 'Dinosaure'
        }
    ]
})

module.exports = mongoose.model('Dinosaure', schema)