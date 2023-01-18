const express = require("express")
const mongoose = require("mongoose")

mongoose.set('strictQuery', false);

const uri = `mongodb+srv://srijan:srijan25@work.el9pdcm.mongodb.net/intern`

mongoose.connect(uri).then(()=>{console.log("Database connection successfull")} )
.catch((err) => console.log("No Connections "+err) );
