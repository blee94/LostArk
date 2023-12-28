import { Link } from 'react-router-dom';
import '../../css/SignIn.css';

function SignIn() {
  return (
    <>
      <div className='ContainerSignIn'>
        <input className='UserId InputBox' placeholder='아이디'></input>
        <input className='UserPw InputBox' placeholder='비밀번호'></input>
        <button className='LogInBtn'>로그인</button>
        <Link to='/SignUp' className='SignUp'>
          회원가입
        </Link>
      </div>
    </>
  );
}

export default SignIn;
