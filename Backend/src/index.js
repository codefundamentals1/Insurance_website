const express = require('express')
require('dotenv').config()
const cors = require('cors')
const path = require("path")
const mysql = require("mysql");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");

// const con = require('./db/config')

const app = express();
app.use(cors())

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(cors());
app.use(express.json())

app.get('/' , (req, res)=>{
    res.send("hello ")
})




app.use('/customer', require('./routes/Customer.route'));
app.use('/agent', require('./routes/Agent.route'));
app.use('/inspector', require('./routes/Inspector.route'));


const port = process.env.PORT ;
 
 app.listen(port , () =>{
    console.log(`serve at http://localhost:${port}`)
 })


