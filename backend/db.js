module.exports = app => {
    const mongoose = require("mongoose")
    const uri = 'mongodb://127.0.0.1:27017/db_dinosaure'
    mongoose.connect(uri ,{
        useNewUrlParser: true,
        useUnifiedTopology: false
    })
}