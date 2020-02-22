const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.get("/ladder", function(req, res){
  res.sendFile(__dirname + "/ladder.html");
});

app.post("/ladder", function(req, res){

  var ladderdepth = parseInt(req.body.n1);
  var ladderheight = parseInt(req.body.n2);

  var ladder =Math.sqrt(Math.pow(ladderheight,2)+ (Math.pow(ladderdepth,2))); 


res.send("Your Ladder Height is " + ladder.toFixed(0) + 'Feet');
});
app.listen(3000,function()
{
  console.log ("Server is running on port 3000")
});