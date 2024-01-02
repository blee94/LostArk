import React from 'react';
import YouTube from 'react-youtube';
import '../../../css/Boss-link.css';
import { useEffect } from 'react';

function Boss4() {
  const videoId = 'PCt3w7uTdHQ';
  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };
  useEffect(() => {
    const bossGif = document.querySelector('.bossGif_04');
    bossGif.style.zIndex = '999';

    const animationEndHandler = () => {
      bossGif.style.zIndex = '-1';
    };

    bossGif.addEventListener('animationend', animationEndHandler);

    return () => {
      bossGif.removeEventListener('animationend', animationEndHandler);
    };
  }, []);
  return (
    <div className='ContainerLinkBoss4'>
      <img src='img/boss4.gif' className='bossGif_04' alt='...' />
      <h2 className='nameBoss'>쿠크세이튼</h2>
      <div className='MusicBossLink4'>
        <YouTube videoId={videoId} opts={opts} />
      </div>
      <div className='AboutBoss'>
        요란한 광대의 모습을 한 악마로 페트라니아에서 과거에는 아무런 두각을
        나타내지 못했던 하급 악마였다. 하지만 어느 날, 쿠크세이튼은 카제로스를
        찾아가 <b>다섯번째 군단장</b>의 자리를 요구했고, 페트라니아의 지배자
        앞에서도 쉴 새 없이 떠들어 대는 쿠크세이튼을 본 카제로스는 그를 다섯
        번째 군단장으로 임명했다. 쿠크세이튼은 뛰어난 활약 없이 그냥 수다 한
        번으로 병마지권과 인사권을 가진 군단장에 임명되었다. 굉장히 뛰어난
        변설가인 듯하다.
      </div>
      <span className='Strategy'>
        <b>공략영상</b>
      </span>
      <a
        className='LinkStrategy'
        href='https://www.youtube.com/watch?v=Y1I19YwJuIY'
        target='_blank'
        rel='noopener noreferrer'
      >
        <span className='material-icons'>smart_display</span>
      </a>
      <span className='Reward'>
        <b>보상정보</b>
      </span>
      <a
        className='LinkReward'
        href='https://canfactory.tistory.com/588'
        target='_blank'
        rel='noopener noreferrer'
      >
        <span className='material-icons IconReward'>library_books</span>
      </a>
      <div id='carouselExampleCaptions' className='carousel slide'>
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='0'
            className='active'
            aria-current='true'
            aria-label='Slide 1'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='1'
            aria-label='Slide 2'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='2'
            aria-label='Slide 3'
          ></button>
        </div>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img src='img/bs10.jpg' className='d-block w-100' alt='...' />
            <div className='carousel-caption d-none d-md-block'></div>
          </div>
          <div className='carousel-item'>
            <img src='img/bs11.jpg' className='d-block w-100' alt='...' />
            <div className='carousel-caption d-none d-md-block'></div>
          </div>
          <div className='carousel-item'>
            <img src='img/bs12.jpg' className='d-block w-100' alt='...' />
            <div className='carousel-caption d-none d-md-block'></div>
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
  );
}

export default Boss4;
