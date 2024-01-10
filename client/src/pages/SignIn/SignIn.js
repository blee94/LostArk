import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../../css/SignIn.css';
import axios from 'axios';

function SignIn() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const userSignIn = () => {
    const form = document.forms['signIn'];
    const userInfo = {
      userid: form.userid.value,
      pw: form.pw.value,
    };
    axios
      .post(`${process.env.REACT_APP_HOST}/signin`, userInfo, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.isSuccess) {
          console.log('로그인 성공');
          sessionStorage.setItem('userid', response.data.userid);
          sessionStorage.setItem('isLoggedIn', true);
          setIsLoggedIn(true);
          alert('로그인 하였습니다. 메인 페이지로 이동합니다.');
          navigate('/');
        } else {
          console.log('로그인 실패');
          alert('아이디와 비밀번호를 확인해 주세요!');
        }
      });
  };

  return (
    <>
      <div className='ContainerSignIn'>
        <form name='signIn' className='signIn'>
          <input
            type='text'
            className='UserId InputBox'
            placeholder='아이디'
            id='userid'
          ></input>
          <input
            type='password'
            className='UserPw InputBox'
            placeholder='비밀번호'
            id='pw'
          ></input>
          <button type='button' className='LogInBtn' onClick={userSignIn}>
            로그인
          </button>
        </form>
        <Link to='/SignUp' className='SignUp'>
          회원가입
        </Link>
      </div>
    </>
  );
}

export default SignIn;
