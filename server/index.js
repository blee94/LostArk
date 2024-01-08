const express = require('express');
const session = require('express-session');
const router = require('./routes');
const cors = require('cors');
const multer = require('multer');

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

const uploadRouter = require('./routes/upload');
app.use('/upload', uploadRouter);

const userDataRouter = require('./routes/userdata');
app.use('/userdata', userDataRouter);

const saveCharacterRouter = require('./routes/saveCharacter');
app.use('/saveCharacter', saveCharacterRouter);

app.use('/', router);

app.get('/login', (req, res) => {
  if (req.session && req.session.userid) {
    res.json({ loggedIn: true });
  } else {
    res.json({ loggedIn: false });
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.json({ success: false, message: '로그아웃 실패' });
    } else {
      res.clearCookie('connect.sid');
      res.json({ success: true, message: '로그아웃 성공' });
      console.log('로그아웃 성공');
      console.log('세션 상태: ', req.session);
    }
  });
});

const PORT = 8000;
app.listen(PORT, function () {
  console.log(`Server Open! 서버 주소: http://localhost:${PORT}`);
});
