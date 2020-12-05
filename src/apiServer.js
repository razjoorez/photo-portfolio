const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
//console.log("Hello Api");

//defining the express app
const app = express();

//defining a array as database

const ads = [{ title: "Hello mini database" }];
//adding helmet for security
app.use(helmet());

//using body parser to convert json to json objects
app.use(bodyParser.json());

//enabling cors requests

app.use(cors());

//adding logging with morgan
app.use(morgan("combined"));

//defining an endpoint

app.get("/apis", (req, res) => {
  res.send(ads);
});

app.post("/post", (req, res) => {
  ads.push({ title: "Hello post" });
  console.log(ads);
});

//start the server on port 3001
app.listen(3001, () => {
  console.log("listening on port 3001 ....");
});
