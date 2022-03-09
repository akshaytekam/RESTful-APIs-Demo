const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const bodyParser = require('body-parser');

//Middleware //cross domain access:
app.use(cors());

//Middleware //use body-parser
app.use(bodyParser.json());

//Middleware //Import Routes:
const postsRoutes = require('./routes/posts');

app.use('/posts', postsRoutes)

//Route
app.get('/', (req, res) =>{
    res.send("------------------------This is root page")
})


// Connect to DB //DB name: test on mongodb Atlas
mongoose.connect(process.env.DB_CONNECTION,
  {useNewUrlParser: true}, ()=>{
    console.log('Connected to DB')
})

//How do we listen to requests
app.listen(3000);