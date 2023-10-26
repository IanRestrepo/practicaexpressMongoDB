const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.routes.js')
const app = express();

const PORT = process.env.PORT || 3000;

// Set middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use('/api', userRoutes);


// Set mongoDB 
mongoose.connect('mongodb://127.0.0.1/expressMongo')
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(`Error while trying to connect MongoDB: ${err}`));

// set server

const server = app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${server.address().port}`)
})