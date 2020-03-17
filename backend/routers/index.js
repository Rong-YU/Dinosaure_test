module.exports = app => {
    const express = require('express')
    const Dinosaure = require('../models/Dinosaure')
    const users = require('../models/User')
    const salt =
    "@#(*(!@🦞*8003🐎($Ujklb™¶4(#*(($**())(@156fcfdvghvxcnu$^é😂👌#!#$";
    const crypto = require("crypto");

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

    //ajouter un ami non inscrit
    app.post('/api/addAmi/',async(req,res) => {
        if (req.body.username && req.body.password) {
            let username = req.body.username.toString();
            let user = await users.findOne({username})
            if(user){
                return res.status(400)
            }
            let passwordHash = crypto
              .createHash("sha512")
              .update(req.body.password + salt)
              .digest("hex");
            let seed = Math.random() + "" + Math.random() + "" + Math.random();
            let session = crypto
                .createHash("sha512")
                .update(seed)
                .digest("hex");
            let sessionKey = crypto
              .createHash("sha512")
              .update(session)
              .digest("hex");
            user = await users.create({username, password:passwordHash,sessionKey:sessionKey})
            const ami = await Dinosaure.create({
              user: user,
              name : username,
              age: req.body.age,
              famille: req.body.famille,
              race: req.body.race,
              nourriture: req.body.nourriture,
              amis: []
            })
            await Dinosaure.findOne({"user": req.user}).update({
                $addToSet: { amis: ami  }
            })
            return res.sendStatus(200)
        }
        return res.sendStatus(400)
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

