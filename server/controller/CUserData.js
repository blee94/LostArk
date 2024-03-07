const { User } = require('../model');

const getUserData = async (req, res) => {
  try {
    if (!req.session.userid) {
      return res.status(401).json({ message: '인증되지 않은 요청입니다.' });
    }

    const userid = req.session.userid;

    const user = await User.findOne({ where: { userid } });

    if (!user) {
      return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('사용자 정보 가져오기 에러:', error);
    res.status(500).json({ message: '서버 에러 발생' });
  }
};

module.exports = {
  getUserData,
};
