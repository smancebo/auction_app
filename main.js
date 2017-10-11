const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const api = require('./server/api');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

app.use('/dist',express.static(path.join(__dirname, 'dist')));
app.use('/api', api);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
const port = 8090;
app.listen(port);
console.log(`server running on port ${port}`);
