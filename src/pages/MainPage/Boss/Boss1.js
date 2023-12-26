import React from 'react';
import YouTube from 'react-youtube';
import '../../../css/Boss-link.css';

function Boss1() {
  const videoId = 'EUfNXsL1dGM';
  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className='ContainerLinkBoss'>
      <h2 className='nameBoss'>아르고스</h2>
      <div className='MusicBossLink1'>
        <YouTube videoId={videoId} opts={opts} />
      </div>
      <div className='AboutBoss'>
        시즌2가 열린 후 등장한 최초의 어비스 레이드. 아르고스는 사슬 전쟁 때
        파푸니카를 수호하던 가디언이었는데 갑자기 어딘가에서 명령 받는 모습과
        함께 혼돈의 가디언으로 전향해서 반대로 파푸니카를 공격했다. 이때
        알비온이 등장해서 아르고스를 제압했고 둘다 힘이 소진해서 잠들었다.
        광기에 물들어 폭주한 알비온의 포효를 듣고 덩달아 깨어났다고 한다. 권장
        아이템 레벨은 모든 관문 통틀어서 <b>1370</b>이다.
      </div>
      <span className='Strategy'>
        <b>공략영상</b>
      </span>
      <a
        className='LinkStrategy'
        href='https://www.youtube.com/watch?v=EwAUycmaZVs'
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
            <img src='img/bs1.jpg' className='d-block w-100' alt='...' />
            <div className='carousel-caption d-none d-md-block'></div>
          </div>
          <div className='carousel-item'>
            <img src='img/bs2.jpg' className='d-block w-100' alt='...' />
            <div className='carousel-caption d-none d-md-block'></div>
          </div>
          <div className='carousel-item'>
            <img src='img/bs3.png' className='d-block w-100' alt='...' />
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

export default Boss1;
