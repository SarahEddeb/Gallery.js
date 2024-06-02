/* server.js - Express server*/
'use strict';
const log = console.log

const express = require("express")
var path = require('path');
const app = express()

app.use(express.static(__dirname + '/pub'))

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + '/pub/Landing.html'));
})

app.listen(process.env.PORT || 9001, 
	() => log("Server is running on port 9001..."));