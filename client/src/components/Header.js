import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Header() {
  const navigate = useNavigate();
  const handleLogout = () => {
    axios
      .get(`${process.env.REACT_APP_HOST}/logout`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.success) {
          sessionStorage.removeItem('isLoggedIn'); // 로그아웃 시 로그인 상태 제거
          alert('로그아웃 하였습니다.');
          navigate('');
        } else {
          console.log('로그아웃 실패');
        }
      })
      .catch((error) => {
        console.error('로그아웃 요청 에러:', error);
      });
  };

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      // 로그인 상태라면 마이페이지로 이동
    }
  }, [navigate]);

  return (
    <>
      <header className='ContainerHeader'>
        <img
          className='Logo'
          alt='Logo'
          src='/img/Lalogo.png'
          onClick={() => navigate('')}
        />
        {sessionStorage.getItem('isLoggedIn') === 'true' ? (
          <>
            <span className='LogInMyPage' onClick={() => navigate('MyPage')}>
              MyPage
            </span>
            <span className='LogInHeader' onClick={handleLogout}>
              LogOut
            </span>
          </>
        ) : (
          <span className='LogInHeader' onClick={() => navigate('SignIn')}>
            LogIn
          </span>
        )}
      </header>
    </>
  );
}

export default Header;
