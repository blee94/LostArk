import React from 'react';
import axios from 'axios';

function MyPage() {
  const sendDataToBackend = () => {
    const dataToSend = { key: 'value' }; // 전송할 데이터
    axios
      .post('http://localhost:8000/data', dataToSend)
      .then((response) => {
        // 요청이 성공적으로 보내졌을 때의 처리
        console.log('Response from backend:', response.data);
      })
      .catch((error) => {
        // 요청이 실패했을 때의 처리
        console.error('Error:', error);
      });
  };

  return (
    <>
      {/* 버튼 또는 다른 이벤트를 트리거하여 데이터 전송 */}
      <button onClick={sendDataToBackend}>데이터 전송</button>
    </>
  );
}

export default MyPage;
