const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');
const path = require('path');

app.use(cors());
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = require('./routes');
app.use('/', router);

app.listen(PORT, function () {
  console.log(`Server Open! 서버 주소: http://localhost:${PORT}`);
});
