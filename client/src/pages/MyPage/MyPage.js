import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../src/css/MyPage.css';

function MyPage() {
  const [activeTab, setActiveTab] = useState('containerSub0');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [characterName, setCharacterName] = useState('');
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');
  const [characterInfo, setCharacterInfo] = useState(null);
  const [userPostedImg, setUserPostedImg] = useState('');

  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_HOST}/userdata`,
          {
            withCredentials: true,
          }
        );

        setUserInfo(response.data);
      } catch (error) {
        console.error('사용자 정보 가져오기 에러:', error);
      }
    };

    fetchUserInfo();
  }, []);

  const requestBtn = async () => {
    try {
      const response = await axios.get(
        `https://developer-lostark.game.onstove.com/armories/characters/${characterName}`,
        {
          headers: {
            Accept: 'application/json',
            Authorization:
              'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAxNjAyMzMifQ.mDI-PXkRUyTZkbptYmcN3OYgkhSIgNylQ_TTQcbUI9sD8-kUUswU-UaUctae2VNQf4xh1JRlhL6PxiBuSgX0jkh1RYt6XcyWfunwrlF4ulXwkQBbZFMSI22fb86A6qLspI9eloATHnrWIGVvhJyn_pGXhuMy7OQSmEeZuVUhhkv3MPfK1JBHn5M1aHnCv0msRWuc4Pw-6Do_jiT0JqhXFd-ctLhHwH4Osh1Frfjb1YOYhKIe9_uM3K5kv9beUex2pb7wOoCncNbnpq0oSyrDojGPZ8t8ctQhiVD5DPL7McWf-vgFBGbxppIzucbg93xrqOXG-csWQPmXRpdm7U9chg',
          },
        }
      );

      setCharacterInfo(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const saveMyCharacter = async () => {
    if (!characterInfo || !characterInfo.ArmoryProfile) {
      console.error('캐릭터 정보가 없습니다.');
      return;
    }

    try {
      const { CharacterImage } = characterInfo.ArmoryProfile;
      await axios.post(`${process.env.REACT_APP_HOST}/saveCharacter`, {
        userid: userInfo.userid,
        userimg: CharacterImage,
      });

      const response = await axios.get(
        `${process.env.REACT_APP_HOST}/userdata`,
        {
          withCredentials: true,
        }
      );
      setUserInfo(response.data);

      console.log('캐릭터 정보 저장 완료');
      alert('캐릭터 정보가 성공적으로 저장되었습니다.');
    } catch (error) {
      console.error('캐릭터 정보 저장 에러:', error);
      alert('캐릭터 정보 저장에 실패했습니다.');
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_HOST}/login`, {
        withCredentials: true,
      });
      if (response.data.loggedIn) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error('로그인 상태 확인 에러:', error);
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleImageUpload = async (event) => {
    if (!isLoggedIn) {
      alert('로그인 후 이용 바랍니다');
      return;
    }

    const file = event.target.files[0];
    try {
      const formData = new FormData();
      formData.append('userid', userInfo.userid);
      formData.append('image', file);
      // console.log('보내는 이미지:', file);
      // console.log('보내는 유저 아이디: ', userInfo.userid);
      const response = await axios.post(
        `${process.env.REACT_APP_HOST}/upload`,
        formData,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      const uploadedImageUrl = response.data.imageUrl;
      setUploadedImageUrl(uploadedImageUrl);

      const userPostedImg = response.data.matchImages;
      setUserPostedImg(userPostedImg);

      console.log('다시 받아온 이미지:', userPostedImg);
      console.log('이미지 업로드 완료:', uploadedImageUrl);
    } catch (error) {
      console.error('이미지 업로드 에러:', error);
    }
  };

  const handleInputChange = (event) => {
    setCharacterName(event.target.value);
  };

  useEffect(() => {
    // userPostedImg가 변경될 때마다 이미지를 불러옴
    const fetchUserPostedImage = async () => {
      if (userPostedImg.length > 0) {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_HOST}/${userPostedImg[0].postimg}`
          );
          // 이미지를 받아온 후에 세팅
          setUserPostedImg(response.data);
        } catch (error) {
          console.error('업로드 이미지 불러오기 에러:', error);
        }
      }
    };

    fetchUserPostedImage();
  }, [userPostedImg]);

  return (
    <>
      <div className='containerMain'>
        <div className='containerSection1'>
          <div className='containerSub0 containerSub hidden'>Main</div>
          {/* --------------------page1 left------------------------ */}
          <div
            className={
              activeTab === 'textBox1'
                ? 'containerSub1 containerSub'
                : 'containerSub1 containerSub hidden'
            }
          >
            {userInfo ? (
              <div className='userInfoBox'>
                <p>아이디: {userInfo.userid}</p>
                <p>이메일: {userInfo.email}</p>
                <p>닉네임: {userInfo.nickname}</p>
                <img
                  src={userInfo.userimg}
                  alt='대표 캐릭터'
                  className='myCharacterImg'
                />
              </div>
            ) : (
              <p>Loading user information...</p>
            )}
          </div>
          {/* --------------------page2 left------------------------ */}
          <div
            className={
              activeTab === 'textBox2'
                ? 'containerSub2 containerSub'
                : 'containerSub2 containerSub hidden'
            }
          >
            {characterInfo && characterInfo.ArmoryProfile && (
              <>
                <img
                  className='imgMainM'
                  src={characterInfo.ArmoryProfile.CharacterImage}
                  alt='Character'
                  style={{
                    maxWidth: '500px',
                    maxHeight: '500px',
                    top: '10px',
                  }}
                />
                <div className='nickNameM'>
                  닉네임: {characterInfo.ArmoryProfile.CharacterName}
                </div>
              </>
            )}
            <div className='searchBox2'>
              <input
                type='text'
                name='character'
                id='character'
                value={characterName}
                onChange={handleInputChange}
              />
              <button type='button' onClick={requestBtn}>
                검색
              </button>
              <button type='button' onClick={saveMyCharacter}>
                저장
              </button>
            </div>
          </div>
          {/* --------------------page3 left------------------------ */}
          <div
            className={
              activeTab === 'textBox3'
                ? 'containerSub3 containerSub'
                : 'containerSub3 containerSub hidden'
            }
          >
            {userPostedImg && userPostedImg.length > 0 ? (
              <>
                {userPostedImg
                  .slice(Math.max(0, userPostedImg.length - 3))
                  .map((image, index) => (
                    <img
                      key={index}
                      className='uploadedImage'
                      src={`${process.env.REACT_APP_HOST}/${image.postimg}`}
                      alt={`Uploaded ${index}`}
                    />
                  ))}
              </>
            ) : (
              <p>No uploaded images yet</p>
            )}
          </div>
          {/* --------------------page4 left------------------------ */}
          <div
            className={
              activeTab === 'textBox4'
                ? 'containerSub4 containerSub'
                : 'containerSub4 containerSub hidden'
            }
          >
            <img
              className='uploadedUserImage'
              src={`${process.env.REACT_APP_HOST}/${uploadedImageUrl}`}
              alt=''
            />
            <div className='userProfileImg'>
              <input
                type='file'
                accept='image/*'
                onChange={handleImageUpload}
              />
            </div>
          </div>
        </div>
        {/* --------------------page right------------------------ */}

        <div className='containerSection2'>
          <div
            className={activeTab === 'textBox1' ? 'textBox active' : 'textBox'}
            onClick={() => handleTabClick('textBox1')}
          >
            개인 정보
          </div>
          <div
            className={activeTab === 'textBox2' ? 'textBox active' : 'textBox'}
            onClick={() => handleTabClick('textBox2')}
          >
            대표 캐릭터 설정
          </div>
          <div
            className={activeTab === 'textBox3' ? 'textBox active' : 'textBox'}
            onClick={() => handleTabClick('textBox3')}
          >
            업로드한 이미지
          </div>
          <div
            className={activeTab === 'textBox4' ? 'textBox active' : 'textBox'}
            onClick={() => handleTabClick('textBox4')}
          >
            이미지 업로드
          </div>
        </div>
      </div>
    </>
  );
}

export default MyPage;
