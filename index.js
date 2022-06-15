import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import LoginPage from './routes/LoginPage.js';
import SignPage from './routes/SignPage.js';

const url = "mongodb+srv://mehroz422:123@mehroz.w2pcmbr.mongodb.net/?retryWrites=true&w=majority"

const app = express();

mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true}).then(()=> console.log("Connected to Database."));

app.listen(5000);

app.use(cors());

app.use(bodyParser.json({extended: true}));

app.use(bodyParser.urlencoded({extended: true}));

app.use("/sign-up",SignPage);

app.use("/services",LoginPage);

app.use("/user",LoginPage);

app.use("/update",LoginPage);

