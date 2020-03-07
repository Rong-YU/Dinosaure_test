const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require('cors')
const fileUpload = require("express-fileupload");
async function init() {

  app.use(express.static("public"));

  app.listen(3000, function() {
    console.log("Your app is listening on port " + 3000);
  });
}

//app.use(cors({credentials: true, origin: 'http://localhost:8080'}))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser());
app.use(express.json({ limit: "1mb" }));
app.use(
  fileUpload({
    limits: {
      fileSize: 8000000,
      files: 5
    }
  })
);
  
require("./db")(app)
require("./routers/auth")(app)
require("./routers/index")(app)

init();