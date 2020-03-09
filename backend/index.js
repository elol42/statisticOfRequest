const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/statisticOfRequest"
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Statistics')
  })

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});