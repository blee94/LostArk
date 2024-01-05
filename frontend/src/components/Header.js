import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Header() {
  const navigate = useNavigate();

  const goToPage = (pageName) => {
    navigate(`/${pageName}`);
  };

  // const handleLogout = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:8000/logout');
  //     if (response.data.isSuccess) {
  //       localStorage.removeItem('userid'); // 혹은 다른 필요한 정보 제거
  //       navigate('/');
  //     } else {
  //       // 실패 시 처리
  //       console.log('로그아웃 실패');
  //     }
  //   } catch (error) {
  //     console.error('로그아웃 에러:', error);
  //   }
  // };
  return (
    <>
      <header className='ContainerHeader'>
        <img
          className='Logo'
          alt='Logo'
          src='/img/Lalogo.png'
          onClick={() => goToPage('')}
        />
        <span className='LogInMyPage' onClick={() => goToPage('MyPage')}>
          MyPage
        </span>
        <span className='LogInHeader' onClick={() => goToPage('SignIn')}>
          LogIn
        </span>
        {/* <span className='LogOutHeader' onClick={handleLogout}>
          LogOut
        </span> */}
      </header>
    </>
  );
}

export default Header;
