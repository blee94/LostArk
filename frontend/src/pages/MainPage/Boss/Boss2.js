import React from 'react';
import YouTube from 'react-youtube';
import '../../../css/Boss-link.css';
import { useEffect } from 'react';

function Boss2() {
  const videoId = 'e1iidpnGM3g';
  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };
  useEffect(() => {
    const bossGif = document.querySelector('.bossGif_02');
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
    <div className='ContainerLinkBoss2'>
      <img src='img/boss2.gif' className='bossGif_02' alt='...' />
      <h2 className='nameBoss'>발탄</h2>
      <div className='MusicBossLink2'>
        <YouTube videoId={videoId} opts={opts} />
      </div>
      <div className='AboutBoss'>
        베른 남부 스토리 이후, 격전의 평야에 보낸 정찰대가 단 한 명만 돌아온다.
        이후 정찰대의 증언을 토대로 카마인에게 죽었던 마수군단장이 부활하여
        돌아온 것 같다는 실리안의 언급이 있었는데, 일리아칸이 직접 새로운 신체를
        기워내고 영혼을 그러모아 새로이 만들어낸 육신에 가두어 발탄을
        부활시켰다고 한다. 실제로 발탄이 두르고 있는 갑옷을 부수면 발탄의 몸
        곳곳에 푸르스름하게 빛나는 기운 흔적을 볼 수 있다.
      </div>
      <span className='Strategy'>
        <b>공략영상</b>
      </span>
      <a
        className='LinkStrategy'
        href='https://www.youtube.com/watch?v=YNf2my7id-A'
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
            <img src='img/bs4.jpg' className='d-block w-100' alt='...' />
            <div className='carousel-caption d-none d-md-block'></div>
          </div>
          <div className='carousel-item'>
            <img src='img/bs5.jpg' className='d-block w-100' alt='...' />
            <div className='carousel-caption d-none d-md-block'></div>
          </div>
          <div className='carousel-item'>
            <img src='img/bs6.jpg' className='d-block w-100' alt='...' />
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

export default Boss2;
