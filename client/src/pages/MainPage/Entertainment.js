import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/Entertainment.css';

function Entertainment() {
  let previousBoxIndex = null;

  function randomBox() {
    const boxArray = [
      'box1',
      'box2',
      'box3',
      'box4',
      'box5',
      'box6',
      'box7',
      'box8',
      'box9',
    ];

    if (previousBoxIndex !== null) {
      const previousBox = document.querySelector(
        `.${boxArray[previousBoxIndex]}`
      );
      previousBox.classList.remove('hide');
    }

    let randomIndex = Math.floor(Math.random() * boxArray.length);

    while (randomIndex === previousBoxIndex) {
      randomIndex = Math.floor(Math.random() * boxArray.length);
    }

    const randomBox = document.querySelector(`.${boxArray[randomIndex]}`);
    randomBox.classList.add('hide');

    previousBoxIndex = randomIndex;
  }

  function checkAnswer() {
    // api/하드코딩으로 저장된 이미지 idx와 일치하는지 체크하는 방식?
  }
  return (
    <>
      {/* -----------------app1---------------------- */}
      <div className='app1'>
        <div className='mainContainer1'>
          <img src='img/main1.jpg' className='randomTest' alt='...' />
          <div className='box1 smallBox'></div>
          <div className='box2 smallBox'></div>
          <div className='box3 smallBox'></div>
          <div className='box4 smallBox'></div>
          <div className='box5 smallBox'></div>
          <div className='box6 smallBox'></div>
          <div className='box7 smallBox'></div>
          <div className='box8 smallBox'></div>
          <div className='box9 smallBox'></div>
        </div>
        <br />
        <button className='randomButton' type='button' onClick={randomBox}>
          생성
        </button>
        <div className='containerSubmitAnswer'>
          <input type='text' className='writeAnswer'></input>
          <button type='button' className='submitAnswer' onClick={checkAnswer}>
            제출
          </button>
        </div>
      </div>
      {/* -----------------app2---------------------- */}
      <div className='app2'>
        <div className='mainContainer2'>
          <div className='box1_02 smallBox_02'></div>
          <div className='box2_02 smallBox_02'></div>
          <div className='box3_02 smallBox_02'></div>
          <div className='box4_02 smallBox_02'></div>
          <div className='box5_02 smallBox_02'></div>
          <div className='box6_02 smallBox_02'></div>
          <div className='box7_02 smallBox_02'></div>
          <div className='box8_02 smallBox_02'></div>
          <div className='box9_02 smallBox_02'></div>
          <div className='box10-02 smallBox_02'></div>
          <div className='box11_02 smallBox_02'></div>
          <div className='box12_02 smallBox_02'></div>
        </div>
        <br />
        <button type='button'>생성</button>
      </div>
      {/* -----------------app3---------------------- */}
      <div className='app3'>
        <div className='mainContainer3'>
          <div className='leftBox'>
            <div className='leftBoxTop'></div>
            <div className='leftBoxBottom'></div>
          </div>
          <div className='VS'>vs</div>
          <div className='rightBox'>
            <div className='rightBoxTop'></div>
            <div className='rightBoxBottom'></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Entertainment;
