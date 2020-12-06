const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const faker = require('faker');
//console.log("Hello Api");

//defining the express app
const app = express();

//defining a array as database

const ads = [{ title: "Hello mini database" }];
//adding helmet for security

//creating faker database

var database = products =[];


//populating database with faker

for(i=1; i<=301; i++) {
  products.push( {
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    price: faker.commerce.price(),
    imageUrl: "https://source.unsplash.com"
  });
}
console.log(JSON.stringify(database));
app.use(helmet());

//using body parser to convert json to json objects
app.use(bodyParser.json());

//enabling cors requests

app.use(cors());

//adding logging with morgan
app.use(morgan("combined"));

//defining an endpoint

app.get("/apis", (req, res) => {
  res.send(database);
});

app.post("/post", (req, res) => {
  ads.push({ title: "Hello post" });
  console.log(ads);
});

//start the server on port 3001
app.listen(3001, () => {
  console.log("listening on port 3001 ....");
});
