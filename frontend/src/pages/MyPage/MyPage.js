import React, { useState } from 'react';
import axios from 'axios';

function MyPage() {
  const [characterName, setCharacterName] = useState(''); // 입력 값을 추적할 상태

  const requestBtn = async () => {
    try {
      const test = await axios.get(
        `https://developer-lostark.game.onstove.com/armories/characters/${characterName}`,
        {
          headers: {
            Accept: 'application/json',
            Authorization:
              'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAxNjAyMzMifQ.mDI-PXkRUyTZkbptYmcN3OYgkhSIgNylQ_TTQcbUI9sD8-kUUswU-UaUctae2VNQf4xh1JRlhL6PxiBuSgX0jkh1RYt6XcyWfunwrlF4ulXwkQBbZFMSI22fb86A6qLspI9eloATHnrWIGVvhJyn_pGXhuMy7OQSmEeZuVUhhkv3MPfK1JBHn5M1aHnCv0msRWuc4Pw-6Do_jiT0JqhXFd-ctLhHwH4Osh1Frfjb1YOYhKIe9_uM3K5kv9beUex2pb7wOoCncNbnpq0oSyrDojGPZ8t8ctQhiVD5DPL7McWf-vgFBGbxppIzucbg93xrqOXG-csWQPmXRpdm7U9chg',
          },
        }
      );
      console.log(test.data.ArmoryProfile);
      const CName = test.data.ArmoryProfile.CharacterClassName;
      console.log(CName);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (event) => {
    setCharacterName(event.target.value);
  };

  return (
    <>
      <header className='ContainerMyPage'>
        <input
          type='text'
          name='character'
          id='character'
          value={characterName}
          onChange={handleInputChange}
        />
        <button type='button' onClick={requestBtn}>
          버튼
        </button>
      </header>
    </>
  );
}

export default MyPage;
