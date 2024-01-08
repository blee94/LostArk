const { User } = require('../model');

const saveCharacter = async (req, res) => {
  try {
    const { userid, userimg } = req.body;

    const user = await User.findOne({ where: { userid } });

    if (user) {
      await user.update({ userimg: userimg });
      return res
        .status(200)
        .send('유저 이미지가 성공적으로 업데이트되었습니다.');
    } else {
      return res.status(404).send('해당하는 유저를 찾을 수 없습니다.');
    }
  } catch (error) {
    console.error('유저 이미지 업데이트 에러:', error);
    return res.status(500).send('유저 이미지 업데이트에 실패했습니다.');
  }
};

module.exports = {
  saveCharacter,
};
