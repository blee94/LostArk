import { useEffect } from 'react';
import '../../css/Character.css';

function Character_backup() {
  useEffect(() => {
    const characterInfoDivs = document.querySelectorAll('.CharacterInfo > div');

    characterInfoDivs.forEach((div, index) => {
      setTimeout(() => {
        div.classList.add('visible');
      }, index * 100);
    });
  }, []);
  return (
    <>
      <div className='MyCharacterContainer'>
        <div className='CharacterStandCase'>
          <a
            href='https://lostark.game.onstove.com/Profile/Character/프랜드쉽94'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='img/My1.png' className='My1' alt='...' />
          </a>
          <div className='StandMain'></div>
          <div className='StandSub'></div>
        </div>
        <div className='CharacterInfo'>
          <div className='NicknameC'>
            닉네임: <span className='Info1'>프랜드쉽94</span>
          </div>
          <div className='ClassC'>
            클래스: <span className='Info2'>버서커</span>
          </div>
          <div className='TitleC'>
            칭호: <span className='Info3'>바나나나</span>
          </div>
          <div className='EquipC'>
            장비:{' '}
            <span className='Info4'>
              {[...Array(11)].map((_, index) => (
                <img
                  key={index}
                  src={`img/c${index + 1}.png`}
                  alt={`c${index + 1}`}
                />
              ))}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Character_backup;
