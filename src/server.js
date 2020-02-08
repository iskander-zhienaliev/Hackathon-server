import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017', {
    dbName: 'travelhack',
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});
const mongoDB = mongoose.connection;
mongoDB.on('error', () => {
    console.log('Error when connecting to db ');
});

mongoDB.once('open', () => {
    console.log('Successfully connected to database ');
});

const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());


export default app;