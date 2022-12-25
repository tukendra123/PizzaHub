// import { Express } from "express";
const express = require("express");
const mongoose = require("mongoose");
const pizzaModel = require("./models/pizzaModel.js");
const pizzaRoute = require('./routes/pizzaRoute.js');
const userRoute = require('./routes/userRoute.js');

//Create DB connection
const MONGODB_URL = "mongodb://localhost:27017/pizza_web"
mongoose.connect(MONGODB_URL).then(() => {
    console.log("connect to DB");
}).catch((err) => {
    console.log(err.message);
})

// create port and server

const app = express();
app.use(express.json());

app.use('/api/pizzas/' , pizzaRoute) ;
app.use('/api/users/', userRoute);

app.get("/" ,(req,res) => {
    res.send("Server is running!");
})

// //find pizzas
// app.get("/getpizzas" ,(req, res) => {
//     pizzaModel.find({},(err, desc) => {
//         if(err) {
//             console.log(err);
//         }else{
//             res.send(desc);
//         }
//     })
// });

const port = process.env.PORT || 5000;

app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})