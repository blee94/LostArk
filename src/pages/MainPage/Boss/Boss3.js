import React from 'react';
import YouTube from 'react-youtube';
import '../../../css/Boss-link.css';

function Boss3() {
  const videoId = 'LjeLcSCdRbQ';
  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className='ContainerLinkBoss3'>
      <h2 className='nameBoss'>비아키스</h2>
      <div className='MusicBossLink3'>
        <YouTube videoId={videoId} opts={opts} />
      </div>
      <div className='AboutBoss'>
        카제로스 휘하의 군단장 중 한명이며, 직책은 <b>욕망군단장</b>이다.
        욕망이란 단어는 식탐이나 인색함도 포함되어 있는데 정욕에 초점이
        맞춰져있는지 목소리부터 색기가 넘친다. 단 비아키스가 에키드나를 제거하고
        아브렐슈드를 밀어내려는 야욕을 보이는 것을 보면 욕망의 속성을 정욕에
        한정하여 단편적으로 보이지는 않는 것 같다.
      </div>
      <span className='Strategy'>
        <b>공략영상</b>
      </span>
      <a
        className='LinkStrategy'
        href='https://www.youtube.com/watch?v=RRxHRHWyp-Q'
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
            <img src='img/bs7.jpg' className='d-block w-100' alt='...' />
            <div className='carousel-caption d-none d-md-block'></div>
          </div>
          <div className='carousel-item'>
            <img src='img/bs8.jpg' className='d-block w-100' alt='...' />
            <div className='carousel-caption d-none d-md-block'></div>
          </div>
          <div className='carousel-item'>
            <img src='img/bs9.jpg' className='d-block w-100' alt='...' />
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

export default Boss3;
