import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const goToPage = (pageName) => {
    navigate(`/${pageName}`);
  };
  return (
    <>
      <header className='ContainerHeader'>
        <img
          className='Mococo'
          alt='Mococo'
          src='/img/thanks.png'
          onClick={() => goToPage('')}
        />
        <img className='Logo' alt='Logo' src='/img/logo.png' />
        <span className='LogInMyPage' onClick={() => goToPage('MyPage')}>
          MyPage
        </span>
        <span className='LogInHeader' onClick={() => goToPage('SignIn')}>
          LogIn
        </span>
      </header>
    </>
  );
}

export default Header;
