const { PostImg } = require('../model');

// 이미지 가져오기 컨트롤러
exports.getImages = async (req, res) => {
  try {
    const images = await PostImg.findAll({
      attributes: ['postimgidx', 'postimg'],
      limit: 8,
    });
    res.json(images);
    // console.log('보내는 이미지:', images);
  } catch (error) {
    console.error('이미지 가져오기 에러:', error);
    res.status(500).json({ error: '서버 에러' });
  }
};
