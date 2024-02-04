const cookieParser = require("cookie-parser");
const cors = require('cors');
const express = require("express");
const { LOCAL_CLIENT,CLIENT } = require("../config/defaults");
const applyMiddleware = (app)=>{
    
// middleware
app.use(cors({
    origin: [
        LOCAL_CLIENT,
        CLIENT,
        'https://dua-app-client.vercel.app','http://localhost:3000'
    ],
    credentials: true,
    optionSuccessStatus: 200
}));
app.use(express.json());
app.use(cookieParser());
}

module.exports = applyMiddleware