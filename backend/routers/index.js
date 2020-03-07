module.exports = app => {
    const express = require('express')
    const Dinosaure = require('../models/Dinosaure')
    const User = require('../models/User')

    //(Afficher/Modifier) ses informations (age / famille / race / nourriture) 
    app.get('/api/dinosaures',async(req,res) => {
        const items = await Dinosaure.find().where('user').equals(req.user).populate('amis')
        res.send(items)
    })

    app.put('/api/dinosaures',async(req,res) => {
        const model = await Dinosaure.find().where('user').equals(req.user).update({
            age: req.body.age,
            famille: req.body.famille,
            race: req.body.race,
            nourriture: req.body.nourriture,
        })
        res.send(model)
    })

    //(Ajouter/Supprimer) un "Dinosaure" (déjà inscrit) de sa liste d'amis.
    app.get('/api/list/',async(req,res) => {
        const model = await User.find().select('username')
        res.send(model)
    })

    app.post('/api/list/:id', async(req,res) => {
        const ami = await Dinosaure.find().where('user').equals(req.params.id)
        const model = await Dinosaure.find().where('user').equals(req.user).updateOne({
            $addToSet: { amis: ami  }
        })
        res.send(model)
    })
    app.delete('/api/list/:id', async(req,res) => {
        const model = await Dinosaure.find().where('user').equals(req.user).update({
            $pull: { amis: {  _id: req.params.id }  }
        })
        res.send(model)
    })


}
