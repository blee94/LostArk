import { useRef } from 'react';
import '../../css/Class.css';
import YouTube from 'react-youtube';

function Class() {
  const videoId1 = 'hZ0AJdAdOSc';
  const videoId2 = 'OO3Bo30remw';
  const videoId3 = 'TZfZBxYG71c';
  const videoId4 = 'ffqndx_Halg';
  const videoId5 = 'apaNS4MDf18';
  const videoId6 = 'R5iQ32XxRKo';
  const opts = {
    height: '560',
    width: '995',
  };

  const classRefs = {
    2: useRef(null),
    3: useRef(null),
    4: useRef(null),
    5: useRef(null),
    6: useRef(null),
    7: useRef(null),
  };
  const scrollToClass = (classNumber) => {
    const element = classRefs[classNumber].current;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <div className='sideNav'>
        <ul>
          <li onClick={scrollToTop}>메인으로</li>
          <li onClick={() => scrollToClass(2)}>버서커</li>
          <li onClick={() => scrollToClass(3)}>슬레이어</li>
          <li onClick={() => scrollToClass(4)}>스트라이커</li>
          <li onClick={() => scrollToClass(5)}>기상술사</li>
          <li onClick={() => scrollToClass(6)}>소서리스</li>
          <li onClick={() => scrollToClass(7)}>건슬링어</li>
          {/* ... (다른 클래스들) */}
        </ul>
      </div>
      <div className='ContainerClassMain1'>
        <div className='c1'>
          <img
            src='img/classWorrior.png'
            onClick={() => scrollToClass(2)}
            alt=''
          ></img>
        </div>
        <div className='c2'>
          <img
            src='img/classWorriorF.png'
            onClick={() => scrollToClass(3)}
            alt=''
          ></img>
        </div>
        <div className='c3'>
          <img
            src='img/classFighterM.png'
            onClick={() => scrollToClass(4)}
            alt=''
          ></img>
        </div>
        <div className='c4'>
          <img
            src='img/classSpecialist.png'
            onClick={() => scrollToClass(5)}
            alt=''
          ></img>
        </div>
        <div className='c5'>
          <img
            src='img/classSorceror.png'
            onClick={() => scrollToClass(6)}
            alt=''
          ></img>
        </div>
        <div className='c6'>
          <img
            src='img/classHunter.png'
            onClick={() => scrollToClass(7)}
            alt=''
          ></img>
        </div>
      </div>
      <div className='ContainerClassMain2' ref={classRefs[2]}>
        <img src='/img/classWM.png' alt=''></img>
        <img src='/img/classWS.png' alt=''></img>
        <div className='classVideo'>
          <YouTube videoId={videoId1} opts={opts} />
        </div>
      </div>
      <div className='ContainerClassMain3' ref={classRefs[3]}>
        <img src='/img/classWFM.png' alt=''></img>
        <img src='/img/classFS.png' alt=''></img>
        <div className='classVideo'>
          <YouTube videoId={videoId2} opts={opts} />
        </div>
      </div>
      <div className='ContainerClassMain4' ref={classRefs[4]}>
        <img src='/img/classFMM.png' alt=''></img>
        <img src='/img/classFMS.png' alt=''></img>
        <div className='classVideo'>
          <YouTube videoId={videoId3} opts={opts} />
        </div>
      </div>
      <div className='ContainerClassMain5' ref={classRefs[5]}>
        <img src='/img/classSpecialM.png' alt=''></img>
        <img src='/img/classSpecialistS.png' alt=''></img>
        <div className='classVideo'>
          <YouTube videoId={videoId4} opts={opts} />
        </div>
      </div>
      <div className='ContainerClassMain6' ref={classRefs[6]}>
        <img src='/img/classSM.png' alt=''></img>
        <img src='/img/classSS.png' alt=''></img>
        <div className='classVideo'>
          <YouTube videoId={videoId5} opts={opts} />
        </div>
      </div>
      <div className='ContainerClassMain7' ref={classRefs[7]}>
        <img src='/img/classHM.png' alt=''></img>
        <img src='/img/classHS.png' alt=''></img>
        <div className='classVideo'>
          <YouTube videoId={videoId6} opts={opts} />
        </div>
      </div>
    </>
  );
}

export default Class;
