const express = require('express');
const app=express();
const bodyparser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongoose');
dotenv.config({path: path.resolve(__dirname, 'envfile.env')});
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log("SERVER IS LISTENING  ON PORT "+port);
})

//middleware
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

mongoose.connect("mongodb+srv://Nproject:newproject@testcluster.udr6vli.mongodb.net/").then(() => {
    console.log("DATABASE CONNECTED");
})

