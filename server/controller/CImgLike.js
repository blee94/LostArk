const { ImgLike } = require('../model'); // 좋아요 모델 불러오기

// 좋아요 상태를 변경하는 컨트롤러
exports.imgLike = async (req, res) => {
  try {
    const { userid, postimgidx } = req.body; // 클라이언트로부터 사용자 ID와 이미지 ID를 받아옴
    console.log('유저 정보: ', userid);
    console.log('이미지 정보: ', postimgidx);
    // ImgLike 모델을 사용하여 해당 이미지의 좋아요 상태를 조회
    const likeInfo = await ImgLike.findOne({
      where: {
        userid: userid, // 사용자 ID로 필터링
        imageId: postimgidx, // 이미지 ID로 필터링
      },
    });

    // 좋아요 상태가 존재한다면 업데이트, 없다면 새로운 레코드 생성
    if (likeInfo) {
      // 이미 존재하는 경우, 좋아요 상태 업데이트
      await ImgLike.update(
        { imglike: !likeInfo.imglike }, // 기존 상태의 반대값으로 업데이트
        {
          where: {
            userid: userid,
            imageId: postimgidx,
          },
        }
      );
    } else {
      // 존재하지 않는 경우, 새로운 레코드 생성
      await ImgLike.create({
        imglike: true, // 좋아요 상태 설정
        userid: userid,
        imageId: postimgidx,
      });
    }

    res.json({ message: '좋아요 상태가 변경되었습니다.' });
    console.log('좋아요상태 변경 완료');
  } catch (error) {
    console.error('좋아요 상태 변경 에러:', error);
    res.status(500).json({ error: '서버 에러' });
  }
};
