import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import '../../css/OOTD.css';

function OOTD() {
  const [liked, setLiked] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedImageUrl, setExpandedImageUrl] = useState('');

  const handleLikeClick = (area) => {
    setLiked((prevLiked) => ({
      ...prevLiked,
      [area]: !prevLiked[area], // 해당 지역(area)의 liked 상태 토글
    }));
  };
  const handleImageClick = (imageUrl) => {
    setIsModalOpen(true);
    setExpandedImageUrl(imageUrl);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setExpandedImageUrl('');
  };
  return (
    <>
      <div className='OOTDContainer'>
        <div className='area1'>
          <img
            src='img/OOTD1.jpg'
            onClick={() => handleImageClick('img/OOTD1.jpg')}
          ></img>
          <div className='areaContent'>
            [프렌드쉽]
            <span
              className={
                liked['area1'] ? 'material-icons red' : 'material-icons'
              }
              onClick={() => handleLikeClick('area1')}
            >
              favorite
            </span>
          </div>
          <Modal
            isOpen={isModalOpen && expandedImageUrl === 'img/OOTD1.jpg'}
            onRequestClose={handleCloseModal}
            contentLabel='Expanded Image Modal'
          >
            <button onClick={handleCloseModal}>Close</button>
            <img src={expandedImageUrl} alt='Expanded' />
          </Modal>
        </div>
        <div className='area2'>
          <img
            src='img/OOTD2.jpg'
            onClick={() => handleImageClick('img/OOTD2.jpg')}
          ></img>
          <div className='areaContent'>
            [잉친94]
            <span
              className={
                liked['area2'] ? 'material-icons red' : 'material-icons'
              }
              onClick={() => handleLikeClick('area2')}
            >
              favorite
            </span>
          </div>
          <Modal
            isOpen={isModalOpen && expandedImageUrl === 'img/OOTD2.jpg'}
            onRequestClose={handleCloseModal}
            contentLabel='Expanded Image Modal'
          >
            <button onClick={handleCloseModal}>Close</button>
            <img src={expandedImageUrl} alt='Expanded' />
          </Modal>
        </div>
        <div className='area3'>
          <img
            src='img/OOTD3.jpg'
            onClick={() => handleImageClick('img/OOTD3.jpg')}
          ></img>
          <div className='areaContent'>
            [잉친94]
            <span
              className={
                liked['area3'] ? 'material-icons red' : 'material-icons'
              }
              onClick={() => handleLikeClick('area3')}
            >
              favorite
            </span>
          </div>
          <Modal
            isOpen={isModalOpen && expandedImageUrl === 'img/OOTD3.jpg'}
            onRequestClose={handleCloseModal}
            contentLabel='Expanded Image Modal'
          >
            <button onClick={handleCloseModal}>Close</button>
            <img src={expandedImageUrl} alt='Expanded' />
          </Modal>
        </div>
        <div className='area4'>
          <img
            src='img/OOTD4.jpg'
            onClick={() => handleImageClick('img/OOTD4.jpg')}
          ></img>
          <div className='areaContent'>
            [프랜드쉽94]
            <span
              className={
                liked['area4'] ? 'material-icons red' : 'material-icons'
              }
              onClick={() => handleLikeClick('area4')}
            >
              favorite
            </span>
          </div>
          <Modal
            isOpen={isModalOpen && expandedImageUrl === 'img/OOTD4.jpg'}
            onRequestClose={handleCloseModal}
            contentLabel='Expanded Image Modal'
          >
            <button onClick={handleCloseModal}>Close</button>
            <img src={expandedImageUrl} alt='Expanded' />
          </Modal>
        </div>
        <div className='area5'>
          <img
            src='img/OOTD5.jpg'
            onClick={() => handleImageClick('img/OOTD5.jpg')}
          ></img>
          <div className='areaContent'>
            [프랜드쉽94]
            <span
              className={
                liked['area5'] ? 'material-icons red' : 'material-icons'
              }
              onClick={() => handleLikeClick('area5')}
            >
              favorite
            </span>
          </div>
          <Modal
            isOpen={isModalOpen && expandedImageUrl === 'img/OOTD5.jpg'}
            onRequestClose={handleCloseModal}
            contentLabel='Expanded Image Modal'
          >
            <button onClick={handleCloseModal}>Close</button>
            <img src={expandedImageUrl} alt='Expanded' />
          </Modal>
        </div>
        <div className='area6'>
          <img
            src='img/OOTD6.jpg'
            onClick={() => handleImageClick('img/OOTD6.jpg')}
          ></img>
          <div className='areaContent'>
            [애옹쓰는참지않아]
            <span
              className={
                liked['area6'] ? 'material-icons red' : 'material-icons'
              }
              onClick={() => handleLikeClick('area6')}
            >
              favorite
            </span>
          </div>
          <Modal
            isOpen={isModalOpen && expandedImageUrl === 'img/OOTD6.jpg'}
            onRequestClose={handleCloseModal}
            contentLabel='Expanded Image Modal'
          >
            <button onClick={handleCloseModal}>Close</button>
            <img src={expandedImageUrl} alt='Expanded' />
          </Modal>
        </div>
        <div className='area7'>
          <img
            src='img/OOTD7.jpg'
            onClick={() => handleImageClick('img/OOTD7.jpg')}
          ></img>
          <div className='areaContent'>
            [흑댕댕이]
            <span
              className={
                liked['area7'] ? 'material-icons red' : 'material-icons'
              }
              onClick={() => handleLikeClick('area7')}
            >
              favorite
            </span>
          </div>
          <Modal
            isOpen={isModalOpen && expandedImageUrl === 'img/OOTD7.jpg'}
            onRequestClose={handleCloseModal}
            contentLabel='Expanded Image Modal'
          >
            <button onClick={handleCloseModal}>Close</button>
            <img src={expandedImageUrl} alt='Expanded' />
          </Modal>
        </div>
        <div className='area8'>
          <img
            src='img/OOTD8.jpg'
            onClick={() => handleImageClick('img/OOTD8.jpg')}
          ></img>
          <div className='areaContent'>
            [잉친94]
            <span
              className={
                liked['area8'] ? 'material-icons red' : 'material-icons'
              }
              onClick={() => handleLikeClick('area8')}
            >
              favorite
            </span>
          </div>
          <Modal
            isOpen={isModalOpen && expandedImageUrl === 'img/OOTD8.jpg'}
            onRequestClose={handleCloseModal}
            contentLabel='Expanded Image Modal'
          >
            <button onClick={handleCloseModal}>Close</button>
            <img src={expandedImageUrl} alt='Expanded' />
          </Modal>
        </div>
      </div>
    </>
  );
}

export default OOTD;
