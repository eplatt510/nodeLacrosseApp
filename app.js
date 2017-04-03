var express = require("express");
var app = express();

app.use("/", express.static(__dirname + '/views'));

// app.use(express.static('views'));
// app.use(express.static('css'));
// app.use(express.static('js'));

// app.get("/", function(req, res){
    
// });



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started");
});