var express = require("express");
var app = express();

app.use("/", express.static(__dirname + '/views'));

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started");
});