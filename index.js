const express = require("express");
const applyMiddleware = require("./src/middlewares");
const globalErrorHandler = require("./src/utils/globalErrorHandler");
const connectDB = require("./src/db/connectDB");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const category = require('./src/routes/Category/index')
applyMiddleware(app);

//routes
app.use(category)
app.get("/", (req, res) => {
  res.send("server is running....");
});

app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on the server`);
  error.status = 404;
  next(error);
});

// error handling middleware
app.use(globalErrorHandler);

const main=async ()=>{
    await connectDB()
    app.listen(port, () => {
        console.log(`dua app Server is running on port ${port}`);
    });
   
}


main()