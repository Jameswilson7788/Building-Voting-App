const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./config/db').db;
const app = express();
const vote = require('./routes/vote');
const auth = require('./routes/auth');

mongoose.connect(db,function(e){
  if(e) return e;
  console.log("資料庫我覺得可以");
})

app.use('/api/v1/vote', vote);
app.use('/api/v1/auth', auth);

app.listen(3000, function () {
    console.log("3000很優");
})