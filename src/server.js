import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import passport from 'passport';

import auth from './routes/auth';
import children from './routes/children';
import parent from './routes/parent';
import partner from './routes/partner';
import tourOperator from './routes/tourOperator';
import educationInstitution from './routes/educationInstitution';

import passportOptions from "./middleware/passport";

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

app.use(passport.initialize(passportOptions(passport)));

app.use('/auth', auth);
app.use('/children', children);
app.use('/parent', parent);
app.use('/tourOperator', tourOperator);
app.use('/educationInstitution', educationInstitution);

export default app;