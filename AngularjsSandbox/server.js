var production = process.env.NODE_ENV === "production";

var express = require("express");
var _ = require("underscore");
var bodyParser = require("body-parser");
var uuid = require("node-uuid"); // to generate guids.
var open = require("open");
var apiList = require("./api/apiList");
var app = express();


var api = require("./api/api");
app.use("/api", api);

app.use(bodyParser.json()); // to support JSON-encoded bodies

var logedInUsers = [];

_.each(apiList, function(apiItem){
    if (apiItem.apiType === "put"){
        app.put(apiItem.path, apiItem.fn);    
    } if (apiItem.apiType === "get"){
        app.get(apiItem.path, apiItem.fn);    
    } else {
        app.post(apiItem.path, apiItem.fn);    
    }
});

// app.post('/api/login/', function(req, res, next) {
//     // if(req.user)
//     // res.statusCode = 500;
//     setTimeout(function() {

//             if (req.body.username == 'pfadmpp' && req.body.password == 'pfadmpp') {
//                 var newToken= uuid.v4();
//                 logedInUsers.push({username:req.body.username,
//                                    token:newToken})
//                 res.send(newToken);
//             } else {
//                 res.statusCode = 401;
//                 res.send(false);
//             }
//         }, 1000)
//         // console.log(req.body.password);

// });

//Check if a token is valid.
app.post("/api/validateToken/", function(req, res, next) {
    setTimeout(function() {
            res.send(_.contains(logedInUsers, {token:req.body.token}));
        }, 300);
});

app.post("/api/clearTokens/", function(req, res, next) {
    setTimeout(function() {
            while(logedInUsers.length > 0) {
                logedInUsers.pop();
            }
            res.send(true);
        }, 300);
});


var wwwDir = production ? "/www/dist" : "";

var www = express.static(__dirname + wwwDir);
app.use("/", www);

app.listen(8008);
// console.log("Make sure you changed the file:");
// console.log("www/public/modules/core/core.config.js");
// console.log("www/public/modules/core/core.config.js");
// console.log("Before running the deployment!");

open("http://localhost:8008", "chrome");