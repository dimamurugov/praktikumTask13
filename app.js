const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const { PORT = 3000 } = process.env;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

app.use((req, res, next) => {
  req.user = {
    _id: '5f6e4ff88ac8791ec4e8d56c',
  };

  next();
});

app.use('/users', require('./routes/user'));
app.use('/cards', require('./routes/card'));



app.listen(PORT);