//authentication
module.exports = app => {
    const users = require('../models/User')
    const Dinosaure = require('../models/Dinosaure')
    const salt =
    "@#(*(!@🦞*8003🐎($Ujklb™¶4(#*(($**())(@156fcfdvghvxcnu$^é😂👌#!#$";
    const crypto = require("crypto");
    
    app.use(async (req, res, next) => {
        console.log(req.body)
        if (req.originalUrl.startsWith("/api/sessions") && req.method === "POST") {
        return next();
        }
        if (req.originalUrl.startsWith("/api/register") && req.method === "POST") {
            return next();
        }

        console.log(req.body.session)
        if (req.body.session) {
          let user;
          if (user) {
              req.user = user;
              return next();
          }
          let sessionKey = req.body.session
          user = await users.findOne({
              sessionKey
          });
          if (user) {
              req.user = user;
              console.log("next")
              return next();
          }
        }
        return res.sendStatus(401);
  });
  
  app.post("/api/sessions", async (req, res) => {
    if (req.body.username && req.body.password) {
      let username = req.body.username.toString();
      let passwordHash = crypto
        .createHash("sha512")
        .update(req.body.password + salt)
        .digest("hex");
      
      let user = await users.findOne({username, password:passwordHash})
      if (user){
        let seed = Math.random() + "" + Math.random() + "" + Math.random();
        let session = crypto
          .createHash("sha512")
          .update(seed)
          .digest("hex");
        await users.findOneAndUpdate({username},{sessionKey:session})
        return res.status(201).json({username:username,session:session});
      }
      return res.sendStatus(403);
    }
    return res.sendStatus(400);
  });
  
  
  app.post("/api/register", async (req, res) => {
      console.log("sss", req.body)
    if (req.body.username && req.body.password) {
      let username = req.body.username.toString();
      let passwordHash = crypto
        .createHash("sha512")
        .update(req.body.password + salt)
        .digest("hex");
      let seed = Math.random() + "" + Math.random() + "" + Math.random();
      let session = crypto
          .createHash("sha512")
          .update(seed)
          .digest("hex");
      const user = await users.create({username, password:passwordHash,sessionKey:session})
      await Dinosaure.create({
        user: user,
        age: null,
        famille: null,
        race: null,
        nourriture: null,
        amis: []
      })
      res.cookie('session',session)
      res.cookie('username',username)
      return res.status(201).json({});
    }
    return res.sendStatus(400);
  });
  }