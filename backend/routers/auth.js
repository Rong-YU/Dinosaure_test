//authentication
module.exports = app => {
    const Dinosaure = require('../models/Dinosaure')
    const salt =
    "@#(*(!@🦞*8003🐎($Ujklb™¶4(#*(($**())(@156fcfdvghvxcnu$^é😂👌#!#$";
    const crypto = require("crypto");
    
    app.use(async (req, res, next) => {
        req.header("Access-Control-Allow-Origin", "*");
        req.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization, Content-Type, Accept");
        if (req.originalUrl.startsWith("/api/sessions") && req.method === "POST") {
        return next();
        }
        if (req.originalUrl.startsWith("/api/register") && req.method === "POST") {
            return next();
        }

        if (req.headers.authorization) {
          //let sessionKey = req.headers.authorization
          let sessionKey = crypto
            .createHash("sha512")
            .update(req.headers.authorization)
            .digest("hex");
          user = await Dinosaure.findOne({
              sessionKey
          });
          if (user) {
              req.user = user;
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
      
      let user = await Dinosaure.findOne({username, password:passwordHash})
      if (user){
        let seed = Math.random() + "" + Math.random() + "" + Math.random();
        let session = crypto
          .createHash("sha512")
          .update(seed)
          .digest("hex");
        let sessionKey = crypto
          .createHash("sha512")
          .update(session)
          .digest("hex");
        await Dinosaure.findOneAndUpdate({username},{sessionKey:sessionKey})
        return res.status(201).json({username:username,session:session});
      }
      return res.sendStatus(403);
    }
    return res.sendStatus(400);
  });
  
  
  app.post("/api/register", async (req, res) => {
    let username = req.body.username
    let user = await users.findOne({username})
    if(user){
      return res.status(400)
    }
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
      let sessionKey = crypto
        .createHash("sha512")
        .update(session)
        .digest("hex");
      await Dinosaure.create({name:username, username:username, password:passwordHash,sessionKey:sessionKey})
      return res.status(201).json({username:username,session:session});
    }
    return res.sendStatus(400);
  });
  }