//Require
const express = require('express');
const cors = require('cors');
const app =  express();
const admin = require('./routes/admin');
const url = require('./routes/URL');

//midleware;
app.use(express.urlencoded({extended: true}));
app.use(express.json()); 
app.use(cors('*'));


//API Routes;
app.use('/user',admin)
app.use('/url',url)

//API Call List;
//http://localhost:7000/user/login-------->login;
//http://localhost:7000/user/newuser-------->sigin;
//http://localhost:7000/url/new----------->create new URL;
//http://localhost:7000/url/data/23--------->Get all URL based on User;
//http://localhost:7000/url/video/7--------->Get particular video;


//Server running;
app.listen(7000, () => {
    console.log("server listening to port 7000.....");
})