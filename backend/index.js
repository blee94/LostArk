const express = require('express');
const session = require('express-session');
const router = require('./routes');
const cors = require('cors');

const app = express();

app.set('view engine', 'ejs');

app.use(
  session({
    secret: 'blee94',
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);

app.use((req, res, next) => {
  console.log(req.session);
  res.locals.userid = req.session.userid;
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ credentials: true }));

const signupRouter = require('./routes/signup');
app.use('/signup', signupRouter);

const signinRouter = require('./routes/signin');
app.use('/signin', signinRouter);

const logoutRouter = require('./routes/logout');
app.use('/logout', logoutRouter);

app.use('/', router);

const PORT = 8000;
app.listen(PORT, function () {
  console.log(`Server Open! 서버 주소: http://localhost:${PORT}`);
});
