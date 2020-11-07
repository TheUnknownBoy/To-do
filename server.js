const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv  = require('dotenv');
const connectDB = require('./config/db');
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));

// Index route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

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

const PORT = process.env.PORT || 8000;


app.listen(PORT,
    console.log(`Server is running on port: ${PORT}`.red.underline.bold)
    );