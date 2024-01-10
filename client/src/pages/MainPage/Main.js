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
            <div className='CText'>BGM</div>
          </Link>
          <Link to='/Boss' className='GridBox B2'>
            {/* <img src='img/boss1.gif' className='bossGif' alt='...' /> */}
            <div className='CText'>군단장</div>
          </Link>
          <Link to='/OOTD' className='GridBox B3'>
            <div className='CText'>갤러리</div>
          </Link>
          <Link to='/Character' className='GridBox B4'>
            <div className='CText'>캐릭터</div>
          </Link>
          <Link to='/Entertainment' className='GridBox B5'>
            <div className='CText'>Entertainment</div>
          </Link>
          <Link to='/Class' className='GridBox B6'>
            <div className='CText'>클래스</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Main;
