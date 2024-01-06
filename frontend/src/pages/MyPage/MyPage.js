import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../src/css/MyPage.css';

function MyPage() {
  const [activeTab, setActiveTab] = useState('containerSub0');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [characterName, setCharacterName] = useState('');

  const [characterInfo, setCharacterInfo] = useState(null);

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

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_HOST}/checklogin`,
        {
          withCredentials: true,
        }
      );
      if (response.data.loggedIn) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error('로그인 상태 확인 에러:', error);
    }
  };

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
      formData.append('image', file);
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
      console.log('이미지 업로드 완료:', response.data);
      // 이미지 업로드 후에 필요한 작업 수행
    } catch (error) {
      console.error('이미지 업로드 에러:', error);
    }
  };

  const handleInputChange = (event) => {
    setCharacterName(event.target.value);
  };

  return (
    <>
      <div className='containerMain'>
        <div className='containerSection1'>
          <div className='containerSub0 containerSub hidden'>Main</div>
          <div
            className={
              activeTab === 'textBox1'
                ? 'containerSub1 containerSub'
                : 'containerSub1 containerSub hidden'
            }
          >
            Page1
          </div>
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
              <button type='button'>저장</button>
            </div>
          </div>
          <div
            className={
              activeTab === 'textBox3'
                ? 'containerSub3 containerSub'
                : 'containerSub3 containerSub hidden'
            }
          >
            Page3
          </div>
          <div
            className={
              activeTab === 'textBox4'
                ? 'containerSub4 containerSub'
                : 'containerSub4 containerSub hidden'
            }
          >
            <div className='userProfileImg'>
              <input
                type='file'
                accept='image/*'
                onChange={handleImageUpload}
              />
            </div>
            <button>이미지 업로드</button>
          </div>
        </div>
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
            좋아요
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
