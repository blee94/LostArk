import { Link } from 'react-router-dom';
import '../../css/Main.css';

function Main() {
  return (
    <>
      <div className='ContainerMain'>
        <div className='ContainerImg'>
          <div
            id='carouselAutoplaying'
            className='carousel slide'
            data-bs-ride='carousel'
          >
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <img
                  src='/img/main2.jpg'
                  className='d-block w-100'
                  alt='main1'
                />
              </div>
              <div className='carousel-item'>
                <img
                  src='/img/main3.jpg'
                  className='d-block w-100'
                  alt='main2'
                />
              </div>
              <div className='carousel-item'>
                <img
                  src='/img/main4.jpg'
                  className='d-block w-100'
                  alt='main3'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='ContainerGrid'>
          <Link to='/BGM' className='GridBox B1'>
            <img src='img/audioEQ.gif' className='audioEQ' alt='...' />
            BGM
          </Link>
          <Link to='/Boss' className='GridBox B2'>
            {/* <img src='img/boss1.gif' className='bossGif' alt='...' /> */}
            군단장
          </Link>
          <Link to='/OOTD' className='GridBox B3'>
            OOTD
          </Link>
          <Link to='/Character' className='GridBox B4'>
            내 캐릭터
          </Link>
          <Link to='/Entertainment' className='GridBox B5'>
            Entertainment
          </Link>
          <Link to='/Class' className='GridBox B6'>
            클래스
          </Link>
        </div>
      </div>
    </>
  );
}

export default Main;
