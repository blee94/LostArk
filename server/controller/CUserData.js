const { User } = require('../model');

const getUserData = async (req, res) => {
  try {
    if (!req.session.userid) {
      return res.status(401).json({ message: '인증되지 않은 요청입니다.' });
    }

    const userid = req.session.userid;

    // Sequelize 모델을 사용하여 데이터베이스에서 해당 userid의 사용자 정보 가져오기
    const user = await User.findOne({ where: { userid } });

    if (!user) {
      return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
    }

    // 요청한 사용자 정보를 클라이언트에 반환
    res.status(200).json(user);
  } catch (error) {
    console.error('사용자 정보 가져오기 에러:', error);
    res.status(500).json({ message: '서버 에러 발생' });
  }
};

module.exports = {
  getUserData,
};
