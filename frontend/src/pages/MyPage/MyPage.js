import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyPage() {
  const fetchSessionInfo = async () => {
    try {
      const response = await axios.get('http://localhost:8000/userinfo');
      const sessionData = response.data;
      console.log('불러온 세션 정보:', sessionData);
    } catch (error) {
      console.error('에러:', error);
    }
  };

  // 위의 함수 호출
  fetchSessionInfo();
  return <></>;
}

export default MyPage;
