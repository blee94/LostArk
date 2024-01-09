const { PostImg } = require('../model');

async function uploadImage(req, res) {
  try {
    const { userid } = req.body;
    const image = req.file;
    console.log('받아온 유저 아이디:', userid);
    console.log('받아온 이미지:', image);

    const newEntry = await PostImg.create({ userid, postimg: image.path });

    const matchImages = await PostImg.findAll({ where: { userid } });

    res.status(200).json({
      message: '파일 업로드 및 저장 완료',
      entry: newEntry,
      imageUrl: image.path,
      matchImages: matchImages,
    });
    console.log('반환하는 유저의 모든 이미지: ', matchImages);
  } catch (error) {
    console.error('파일 업로드 에러:', error);
    res.status(500).json({ message: '파일 업로드 실패' });
  }
}

module.exports = {
  uploadImage,
};
