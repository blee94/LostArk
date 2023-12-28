import { useState } from 'react';
import '../../css/SignUp.css';

function SignUp() {
  return (
    <>
      <div className='ContainerSignUp'>
        <input className='UserId InputBox' placeholder='아이디'></input>
        <input className='UserPw InputBox' placeholder='비밀번호'></input>
        <input
          className='UserPwRetype InputBox'
          placeholder='비밀번호 확인'
        ></input>
        <button className='SubmitSignUp'>등록</button>
      </div>
    </>
  );
}

export default SignUp;
