import React from 'react';
import YouTube from 'react-youtube';
import '../../../css/Boss-link.css';
import { useEffect } from 'react';

function Boss6() {
  const videoId = 'KFh8Y-GgkOo';
  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };
  useEffect(() => {
    const bossGif = document.querySelector('.bossGif_06');
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
    <div className='ContainerLinkBoss6'>
      <img src='img/boss6.gif' className='bossGif_06' alt='...' />
      <h2 className='nameBoss'>일리아칸</h2>
      <div className='MusicBossLink6'>
        <YouTube videoId={videoId} opts={opts} />
      </div>
      <div className='AboutBoss'>
        쇠락과 부패의 권능으로 죽음을 완성하는, <b>질병군단장</b>. 온몸이 썩어
        문드러진 시체같은 형상을 한 악마로, 독을 품은 벌레 떼나 질병을 퍼뜨리는
        마수, 언데드 따위를 만들어내는 힘이 있다. 설명에 따르면 페트라니아에서
        암흑의 별을 무너트리고 심연의 바다의 모든 생명체를 먹어치웠으며,
        카르테론의 군주란 칭호를 가졌다. '아트록스'라는 이름의 낫을 주 무기로
        사용한다.
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
            <img src='img/bs16.png' className='d-block w-100' alt='...' />
            <div className='carousel-caption d-none d-md-block'></div>
          </div>
          <div className='carousel-item'>
            <img src='img/bs17.png' className='d-block w-100' alt='...' />
            <div className='carousel-caption d-none d-md-block'></div>
          </div>
          <div className='carousel-item'>
            <img src='img/bs18.png' className='d-block w-100' alt='...' />
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
