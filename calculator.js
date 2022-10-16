//jshint esversion:6

//html /*将method上的东西post到我们的action里*/

// the server that it's hosted on our own computer now
// in the future, when deploy our server into the cloud or into someboday else's computer
const express = require("express");
//in hyper command install npm body-parser package, so now it is on pacage.json
// body-parser can let u go into any of your routes, and yu can tap into something called request.body
// req.body is the parsed version of HTTP request
const bodyParser = require("body-parser");

const app = express();
//everytime use body-parser need to write this function
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    // __dirname is going to give you the file path of the current file
    //no matter where it's hosted, on somebody else's computer, in the cloud in a remote server, whatever may be 
    res.sendFile(__dirname+ "/index.html");
});
// let other users can post some thing in our server
app.post("/", function(req, res){
    //req.body for call body-parser
    //console.log(req.body);
    //如果不加Number（），数字1和2会被解读成文本而不是数字，如果输入4,5就会出现结果45而不是9
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = num1 + num2;
    res.send("The result of the calculation is" + result);
});



app.listen(3000, function(){
    console.log("server is running on port 3000.")
});