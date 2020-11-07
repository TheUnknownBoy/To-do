const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv  = require('dotenv');
const connectDB = require('./config/db');
const app = express();

app.use(morgan('dev'));
app.use(express.json());


dotenv.config({
    path:'./config/config.env'
});

connectDB();
// GET, POST, DELETE, PUT


app.use('/api/todo/auth', require('./routes/user'));
app.get('/todo', (req,res) => {
    res.status(200).json({
        "name": "Shubham"
    });
});

const PORT = process.env.PORT || 3000;


app.listen(PORT,
    console.log(`Server is running on port: ${PORT}`.red.underline.bold)
    );