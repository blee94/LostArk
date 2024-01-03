import React from 'react';
import YouTube from 'react-youtube';
import '../../../css/Boss-link.css';
import { useEffect } from 'react';

function Boss1() {
  const videoId = '2RQRumw3urA';
  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };
  useEffect(() => {
    const bossGif = document.querySelector('.bossGif_01');
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
    <div className='ContainerLinkBoss1'>
      <div className='bossName1 bossName'>어둠군단장</div>
      <img src='img/boss1.gif' className='bossGif_01' alt='...' />
      <h2 className='nameBoss'>카멘</h2>
      <div className='MusicBossLink1'>
        <YouTube videoId={videoId} opts={opts} />
      </div>
      <div className='AboutBoss'>
        카제로스 휘하의 군단장 중 한명으로 가장 마지막으로 군단장에 임명된
        최강의 군단장이며, 직책은 <b>어둠군단장</b>이다. 휘하엔 충성심 높은 소수
        정예 악마들을 거느리고 있다고 한다. 루테란 상공에 붉은 달이 떠 이전보다
        훨씬 강해진 채 격전의 평야에서 날뛰던 악마들의 공세를 플레이어와
        에스더들이 저지하던 중 엄청난 광범위의 어둠을 흩뿌리고, 이후
        아르데타인의 비공정에서 관측되면서 그 모습을 드러낸다.
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
            <img src='img/bs1.png' className='d-block w-100' alt='...' />
            <div className='carousel-caption d-none d-md-block'></div>
          </div>
          <div className='carousel-item'>
            <img src='img/bs2.png' className='d-block w-100' alt='...' />
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
