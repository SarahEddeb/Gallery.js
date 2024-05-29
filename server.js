/* server.js - Express server*/
'use strict';
const log = console.log

const express = require("express")
var path = require('path');
const app = express()

app.use(express.static(__dirname + '/pub'))

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + '/pub/gridsLanding.html'));
})

// app.get("/pub/gridsLanding", function (req, res) {
//     // res.sendFile(path.resolve(__dirname, "build", '/pub/gridsLanding.html'))
//     res.sendFile(path.join(__dirname + '/pub/gridsLanding.html'));
// })

// app.get("/pub/gridsExample", function (req, res) {

//     res.sendFile(path.join(__dirname + '/pub/gridsExample.html'));
//     // res.sendFile(path.join(__dirname + '/pub/gridsExamp
// })
// app.get("/pub/gridsAPI", function (req, res) {
//     // res.sendFile(path.resolve(__dirname, "build", '/pub/gridsLanding.html'));

//     // res.sendFile(path.join(__dirname + '/pub/gridsExample.html'));
//     // // res.sendFile(path.join(__dirname + '/pub/gridsExample.html'));
//     res.sendFile(path.join(__dirname + '/pub/gridsAPI.html'));
// })

app.listen(process.env.PORT || 9001, 
	() => log("Server is running on port 9001..."));