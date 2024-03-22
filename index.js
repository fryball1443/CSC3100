const express = require('express');
const cors = require('cors');

const HTTP_PORT = 8000;
console.log("Listening on port " + HTTP_PORT);
var app = express();
app.use(cors());

class Fruit {
  constructor(strName, strColor){
    this.name = strName;
    this.color = strColor;
  }
}

var arrFruit = [];
let objBanana = new Fruit('banana','yellow')
let objApple = new Fruit('apple','red');
let objGrape = new Fruit('grape','purple');
arrFruit.push(objBanana);
arrFruit.push(objApple);
arrFruit.push(objGrape);
arrFruit.push(new Fruit('kiwi', 'brown'));
app.get("/fruit", (req,res,next) => {
    let strFruit = req.query.fruit;
    console.log("Routed to base route");
    console.log(strFruit);
    arrFruit.forEach(function(thisfruit){
        if(thisfruit.name == strFruit){
            res.status(200).send(thisfruit);
        }
    })
    res.status(200).send('{"message":"Fruit not found"}');
})

app.post("/fruit", (req, res, next) => {
  let strName = req.query.name;
  let strColor = req.query.color;
  arrFruit.push(new Fruit(strName,strColor));
  res.status(201).send(arrFruit);
})

app.get("/hello", (req,res,next) => {
    let strFruit = req.query.fruit;
    console.log("Routed to hello route");
    console.log(strFruit);
   
    res.status(200).send("Hello " + strFruit);
})

app.listen(HTTP_PORT);