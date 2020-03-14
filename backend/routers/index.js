module.exports = app => {
    const express = require('express')
    const Dinosaure = require('../models/Dinosaure')
    const User = require('../models/User')

    //(Afficher/Modifier) ses informations (age / famille / race / nourriture) 
    app.get('/api/information',async(req,res) => {
        const items = await Dinosaure.findOne({"user": req.user}).populate('amis')
        res.send(items)
    })

    app.put('/api/information',async(req,res) => {
        await Dinosaure.findOne({"user": req.user}).update({
            name: req.body.name,
            age: req.body.age,
            famille: req.body.famille,
            race: req.body.race,
            nourriture: req.body.nourriture,
        })
        const items = await Dinosaure.findOne({"user": req.user}).populate('amis')
        res.send(items)
    })

    //(Ajouter/Supprimer) un "Dinosaure" (déjà inscrit) de sa liste d'amis.
    app.get('/api/list/',async(req,res) => {
        const items = await Dinosaure.find({"user":{$ne:req.user}})
        res.send(items)
    })

    app.post('/api/friends/:id', async(req,res) => {
        await Dinosaure.findOne({"user": req.user}).update({
            $addToSet: { amis: req.params.id  }
        })
        const items = await Dinosaure.findOne({"user": req.user}).populate('amis')
        res.send(items)
    })
    app.delete('/api/friends/:id', async(req,res) => {

        await Dinosaure.findOne({"user": req.user}).update({},{
            $pull: { amis: req.params.id } 
        })
        const items = await Dinosaure.findOne({"user": req.user}).populate('amis')
        res.send(items)
    })
    


}
