import React from 'react';
import YouTube from 'react-youtube';
import '../../../css/Boss-link.css';

function Boss5() {
  const videoId = 'omCbuCmXXaU';
  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className='ContainerLinkBoss5'>
      <h2 className='nameBoss'>아브렐슈드</h2>
      <div className='MusicBossLink5'>
        <YouTube videoId={videoId} opts={opts} />
      </div>
      <div className='AboutBoss'>
        로스트아크 역사상 최다 관문인 6 관문을 들고 나왔으며, 최대 길이, 연출력
        끝판왕, 뒤틀린 공간과 차원을 컨셉으로 하여 <b>최악의 난이도</b>를
        자랑한다.심지어 클리어에 1시간 넘게 소요 될지도 모른다고. 하필
        아브렐슈드 직전 군단장인 쿠크세이튼이 이전의 두 군단장 레이드와 달리
        아무도 당일 격파에 성공하지 못하는 흉악한 난이도를 자랑하면서 금강선이
        대놓고 어려울거라 선전포고한 아브렐슈드는 얼마나 어려울지 두렵다는
        얘기가 나왔었다.
      </div>
      <span className='Strategy'>
        <b>공략영상</b>
      </span>
      <a
        className='LinkStrategy'
        href='https://www.youtube.com/watch?v=gLEkfuxSZ-Q'
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
            <img src='img/bs13.jpg' className='d-block w-100' alt='...' />
            <div className='carousel-caption d-none d-md-block'></div>
          </div>
          <div className='carousel-item'>
            <img src='img/bs14.jpg' className='d-block w-100' alt='...' />
            <div className='carousel-caption d-none d-md-block'></div>
          </div>
          <div className='carousel-item'>
            <img src='img/bs15.jpg' className='d-block w-100' alt='...' />
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

export default Boss5;
