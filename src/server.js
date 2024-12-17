const express=require ('express');
const app=express();
const mongoose = require('mongoose');
// const User = require('./models/User');

const port = 3000;
const dbUrl = 'mongodb://localhost:27017/mydatabase';
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const connection=mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})