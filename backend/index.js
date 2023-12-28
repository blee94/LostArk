const express = require('express');
const app = express();
const PORT = 8000;
const multer = require('multer');
const session = require('express-session');
const path = require('path');

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/static', express.static('static'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const router = require('./routes');
app.use('/', router);

app.listen(PORT, function () {
  console.log(`Server Open! 서버 주소: http://localhost:${PORT}`);
});
