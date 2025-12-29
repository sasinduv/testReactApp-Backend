const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const host = 'localhost';
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://sasindu:sasindu@cluster0.gph0hb6.mongodb.net/?appName=Cluster0';

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    }catch (error){
        console.error('Error connecting to MongoDB', error);

    }
};

connect();
const server = app.listen(port, host, () => {
    console.log(`Server is running on port ${server.address().port}`);
});

app.use('/api', router);

