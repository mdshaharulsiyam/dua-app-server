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
        'https://gregarious-mandazi-69cbd9.netlify.app','http://localhost:5173/'
    ],
    credentials: true,
    optionSuccessStatus: 200
}));
app.use(express.json());
app.use(cookieParser());
}

module.exports = applyMiddleware