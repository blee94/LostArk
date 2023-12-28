import React, { useState } from 'react';
import '../../css/SignUp.css';
import axios from 'axios';

function SignUp() {
  const [userid, setUserid] = useState('');
  const [pw, setPw] = useState('');

  const handleUseridChange = (e) => {
    setUserid(e.target.value);
  };

  const handlePwChange = (e) => {
    setPw(e.target.value);
  };

  const userSignUp = () => {
    axios({
      method: 'post',
      url: '/SignUp',
      data: { userid, pw },
    }).then((res) => {
      const result = res.data;
      console.log('res data result: ', result);
    });
  };

  return (
    <div className='ContainerSignUp'>
      <form className='userForm'>
        <input
          type='text'
          value={userid}
          onChange={handleUseridChange}
          className='UserId InputBox'
          placeholder='아이디'
        />
        <input
          type='password'
          value={pw}
          onChange={handlePwChange}
          className='UserPw InputBox'
          placeholder='비밀번호'
        />
        <button type='button' className='SubmitSignUp' onClick={userSignUp}>
          등록
        </button>
      </form>
    </div>
  );
}

export default SignUp;
