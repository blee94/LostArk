import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const goToPage = (pageName) => {
    navigate(`/${pageName}`);
  };

  const handleLogin = () => {
    axios
      .get(`${process.env.REACT_APP_HOST}/login`, { withCredentials: true })
      .then((response) => {
        if (response.data.loggedIn) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch((error) => {
        console.error('로그인 상태 확인 요청 에러:', error);
      });
    goToPage('SignIn');
  };

  const handleLogout = () => {
    axios
      .get(`${process.env.REACT_APP_HOST}/logout`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.success) {
          setIsLoggedIn(false);
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
    axios
      .get(`${process.env.REACT_APP_HOST}/login`, { withCredentials: true })
      .then((response) => {
        if (response.data.loggedIn) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch((error) => {
        console.error('로그인 상태 확인 요청 에러:', error);
      });
  }, [isLoggedIn]); // isLoggedIn 상태가 변경될 때마다 실행

  return (
    <>
      <header className='ContainerHeader'>
        <img
          className='Logo'
          alt='Logo'
          src='/img/Lalogo.png'
          onClick={() => navigate('')}
        />
        {isLoggedIn ? (
          <>
            <span className='LogInMyPage' onClick={() => navigate('MyPage')}>
              MyPage
            </span>
            <span className='LogInHeader' onClick={handleLogout}>
              LogOut
            </span>
          </>
        ) : (
          <span className='LogInHeader' onClick={handleLogin}>
            LogIn
          </span>
        )}
      </header>
    </>
  );
}

export default Header;
