const { User } = require('../model');

exports.userSignUp = (req, res) => {
  const { userid, pw, email, nickname } = req.body;

  // 이미 존재하는 userid인지 확인
  User.findOne({ where: { userid } })
    .then((existingUser) => {
      if (existingUser) {
        return res.json({
          isSuccess: false,
          message: '이미 사용중인 아이디입니다.',
        });
      }

      // 존재하지 않는 경우 회원가입 진행
      User.create({ userid, pw, email, nickname })
        .then((newUser) => {
          res.json({
            isSuccess: true,
            message: '회원가입 성공',
            user: newUser,
          });
        })
        .catch((error) => {
          console.error('회원가입 에러:', error);
          res.status(500).json({ isSuccess: false, message: '서버 에러' });
        });
    })
    .catch((error) => {
      console.error('중복 확인 에러:', error);
      res.status(500).json({ isSuccess: false, message: '서버 에러' });
    });
};
