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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: true, credentials: true }));

const signupRouter = require('./routes/signup');
app.use('/signup', signupRouter);

const signinRouter = require('./routes/signin');
app.use('/signin', signinRouter);

const logoutRouter = require('./routes/logout');
app.use('/logout', logoutRouter);

const uploadRouter = require('./routes/upload');
app.use('/upload', uploadRouter);

app.use('/', router);

app.get('/checklogin', (req, res) => {
  if (req.session && req.session.user) {
    // 세션이 존재하고 사용자가 로그인된 상태인 경우
    res.json({ loggedIn: true });
  } else {
    // 세션이 없거나 사용자가 로그인되지 않은 상태인 경우
    res.json({ loggedIn: false });
  }
});

const PORT = 8000;
app.listen(PORT, function () {
  console.log(`Server Open! 서버 주소: http://localhost:${PORT}`);
});
