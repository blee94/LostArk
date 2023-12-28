import React from 'react';
import YouTube from 'react-youtube';
import '../../../css/Boss-link.css';

function Boss6() {
  const videoId = '-L_TVqKCl2g';
  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className='ContainerLinkBoss'>
      <h2 className='nameBoss'>라우리엘</h2>
      <div className='MusicBossLink6'>
        <YouTube videoId={videoId} opts={opts} />
      </div>
      <div className='AboutBoss'>
        모든 라제니스의 존경을 받는 <b>라제니스의 검의 수장</b>이며 예언과
        제의를 담당하는 라제니스의 검. 과거엔 직접 루페온과 만난 적도 있다고 할
        정도로 오랜 시간을 살아왔으며, 셀 수 없는 시간 동안 엘가시아의
        라제니스들을 지켜봤다. 대놓고 언급은 없지만 다른 라제니스의 검 아자키엘,
        디오게네스도 마찬가지이며 프리우나도 라우리엘에게 가르침을 받았을 것으로
        보인다. 티엔은 라우리엘의 절친이다.
      </div>
      <span className='Strategy'>
        <b>공략영상</b>
      </span>
      <a
        className='LinkStrategy'
        href='https://www.youtube.com/watch?v=XhyJeBObyr8'
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
            <img src='img/bs16.jpg' className='d-block w-100' alt='...' />
            <div className='carousel-caption d-none d-md-block'></div>
          </div>
          <div className='carousel-item'>
            <img src='img/bs17.png' className='d-block w-100' alt='...' />
            <div className='carousel-caption d-none d-md-block'></div>
          </div>
          <div className='carousel-item'>
            <img src='img/bs18.jpg' className='d-block w-100' alt='...' />
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

export default Boss6;
