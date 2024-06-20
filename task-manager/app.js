const express = require('express');
const app=express();
const bodyparser = require('body-parser');
const dotenv = require('dotenv');
const handleBars = require('express-handlebars');
const path = require('path');
const mongoose = require('mongoose');
dotenv.config({path: path.resolve(__dirname, 'envfile.env')});
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log("SERVER IS LISTENING  ON PORT "+port);
})


//static files
const publicDirectoryPath = path.resolve(__dirname,'public');
app.use(express.static(publicDirectoryPath));

//middleware
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


//set view engine
const hbs = handleBars.create({extname:'.hbs',});

//Register the handlebars engine with the Express app
app.engine('.hbs',hbs.engine);
app.set('view engine', '.hbs');

//mongodb connection
mongoose.connect("mongodb+srv://Nproject:newproject@testcluster.udr6vli.mongodb.net/").then(() => {
    console.log("DATABASE CONNECTED");
}).catch((err) => {
    console.log("database connection failed "+err);
})

