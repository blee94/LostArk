import { Link } from 'react-router-dom';
import '../../css/SignIn.css';
import axios from 'axios';

function SignIn() {
  const userSignIn = () => {
    const form = document.forms['signIn'];
    const userInfo = {
      userid: form.userid.value,
      pw: form.pw.value,
    };
    axios.post('http://localhost:8000/signin', userInfo).then((response) => {
      if (response.data.isSuccess) {
        console.log('로그인 성공');
        localStorage.setItem('userid', response.data.userid);
      } else {
        console.log('로그인 실패');
        alert('아이디와 비밀번호를 확인해 주세요!');
      }
    });
  };
  return (
    <>
      <div className='ContainerSignIn'>
        <form name='signIn'>
          <input
            className='UserId InputBox'
            placeholder='아이디'
            id='userid'
          ></input>
          <input
            className='UserPw InputBox'
            placeholder='비밀번호'
            id='pw'
          ></input>
          <button className='LogInBtn' onClick={userSignIn}>
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
