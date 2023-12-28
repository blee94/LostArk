import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Boss.css';

function Boss() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imagePaths = [
    '/Boss1',
    '/Boss2',
    '/Boss3',
    '/Boss4',
    '/Boss5',
    '/Boss6',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 6);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      <div className='ContainerBoss'>
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <Link
            key={`Boss${num}`}
            to={imagePaths[num - 1]}
            className={`BoxBoss Boss${num}`}
          >
            <img
              src={`/img/boss${num}.jpg`}
              alt={`boss${num}`}
              onClick={() => handleImageClick(num - 1)}
              style={{
                opacity: currentImageIndex === num - 1 ? 1 : 0.5,
                transition: 'opacity 0.5s ease-in-out',
              }}
            />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Boss;
