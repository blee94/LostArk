import React from 'react';
import YouTube from 'react-youtube';
import '../../../css/Boss-link.css';
import { useEffect } from 'react';

function Boss5() {
  const videoId = 'omCbuCmXXaU';
  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };
  useEffect(() => {
    const bossGif = document.querySelector('.bossGif_05');
    if (bossGif) {
      bossGif.style.zIndex = '999';

      const animationEndHandler = () => {
        bossGif.style.zIndex = '-1';
      };

      bossGif.addEventListener('animationend', animationEndHandler);

      return () => {
        bossGif.removeEventListener('animationend', animationEndHandler);
      };
    }
  }, []);
  return (
    <div className='ContainerLinkBoss5'>
      <img src='img/boss5.gif' className='bossGif_05' alt='...' />
      <h2 className='nameBoss'>아브렐슈드</h2>
      <div className='MusicBossLink5'>
        <YouTube videoId={videoId} opts={opts} />
      </div>
      <div className='AboutBoss'>
        군단장의 일원이며 직책은 <b>몽환군단장</b>. 카제로스가 처음으로 임명한
        군단장이다. 카제로스의 최측근이자 참모로 강력한 힘을 지닌 악마이며
        페트라니아 최고의 지략가이다. 사슬 전쟁 당시 승부를 내지 못한 실린
        종족의 여왕 아제나와 대결 플래그가 서 있다. 성격이 난폭하고 원소의
        힘으로 폭격을 가하는 아제나와 대조적 으로, 성격은 차분하면서 교활하고
        환영과 공간을 다루며 전장의 모습을 재창조해내는 환영 마법을 사용한다.
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
