import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/MainPage/Main';
import MyPage from './pages/MyPage/MyPage';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Header from './components/Header';
import Footer from './components/Footer';
import BGM from './pages/MainPage/BGM';
import Boss from './pages/MainPage/Boss';
import Character from './pages/MainPage/Character';
import Class from './pages/MainPage/Class';
import OOTD from './pages/MainPage/OOTD';
import Stone from './pages/MainPage/Stone';
import Boss1 from './pages/MainPage/Boss/Boss1';
import Boss2 from './pages/MainPage/Boss/Boss2';
import Boss3 from './pages/MainPage/Boss/Boss3';
import Boss4 from './pages/MainPage/Boss/Boss4';
import Boss5 from './pages/MainPage/Boss/Boss5';
import Boss6 from './pages/MainPage/Boss/Boss6';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='body'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/mypage' element={<MyPage />} />
          <Route path='/BGM' element={<BGM />} />
          <Route path='/Boss' element={<Boss />} />
          <Route path='/Character' element={<Character />} />
          <Route path='/Class' element={<Class />} />
          <Route path='/OOTD' element={<OOTD />} />
          <Route path='/Stone' element={<Stone />} />
          <Route path='/Boss1' element={<Boss1 />} />
          <Route path='/Boss2' element={<Boss2 />} />
          <Route path='/Boss3' element={<Boss3 />} />
          <Route path='/Boss4' element={<Boss4 />} />
          <Route path='/Boss5' element={<Boss5 />} />
          <Route path='/Boss6' element={<Boss6 />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
