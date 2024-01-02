import { Link } from 'react-router-dom';
import '../../css/Boss.css';

function Boss() {
  const handleImageClick = (index) => {
    window.location.href = `/Boss${index + 1}`;
  };

  return (
    <>
      <div className='ContainerBoss'>
        <img src='/img/bossMain.png' className='bossChoose' alt='Main Boss' />
        {[4, 6, 1, 5, 3, 2].map((num) => (
          <span
            key={`boxBoss${num}`}
            className={`boxBoss boxBoss${num}`}
            onClick={() => handleImageClick(num - 1)}
          ></span>
        ))}
      </div>
    </>
  );
}

export default Boss;
