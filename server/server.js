require('dotenv').config();
const exp=require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app=exp();
app.use(bodyParser.urlencoded({extended:true}));
app.use(exp.static('public'));

app.use(exp.json());

// require('./db/conn');

//routes required
app.use(require('./router/auth'));



app.listen(process.env.PORT||5000,()=>{console.log("server listening on 5000")});