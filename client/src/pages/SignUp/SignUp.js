import React, { useState } from 'react';
import '../../css/SignUp.css';
import axios from 'axios';

function SignUp() {
  const [userid, setUserid] = useState('');
  const [pw, setPw] = useState('');
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');

  const userSignUp = () => {
    if (!userid || !pw || !email || !nickname) {
      alert('모든 필드를 입력해주세요.');
      return;
    }
    const userInfo = {
      userid: userid,
      pw: pw,
      email: email,
      nickname: nickname,
    };
    axios
      .post(`${process.env.REACT_APP_HOST}/signup`, userInfo)
      .then((response) => {
        if (response.data.isSuccess) {
          console.log('Response from backend:', response.data);
          alert('회원가입에 성공하였습니다');
          document.location.href = '/SignIn';
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  const handleUseridChange = (e) => {
    setUserid(e.target.value);
  };

  const handlePwChange = (e) => {
    setPw(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div className='ContainerSignUp'>
      <form className='userForm'>
        <input
          type='text'
          name='userid'
          value={userid}
          onChange={handleUseridChange}
          className='UserId InputBox'
          placeholder='아이디'
        />
        <input
          type='password'
          name='pw'
          value={pw}
          onChange={handlePwChange}
          className='UserPw InputBox'
          placeholder='비밀번호'
        />
        <input
          type='email'
          name='email'
          value={email}
          onChange={handleEmailChange}
          className='UserEmail InputBox'
          placeholder='이메일'
        />
        <input
          type='text'
          name='nickname'
          value={nickname}
          onChange={handleNicknameChange}
          className='UserNickname InputBox'
          placeholder='닉네임'
        />
        <button className='SubmitSignUp' onClick={userSignUp}>
          등록
        </button>
      </form>
    </div>
  );
}

export default SignUp;
