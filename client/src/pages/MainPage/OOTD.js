import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import '../../css/OOTD.css';
import axios from 'axios';

function OOTD() {
  const [liked, setLiked] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedImageUrl, setExpandedImageUrl] = useState('');
  const [images, setImages] = useState([]);

  const handleLikeClick = async (area) => {
    try {
      const image = images.find((img) => img.imageUrl === area);
      if (image) {
        const response = await axios.post(
          `${process.env.REACT_APP_HOST}/imglike`,
          {
            userid: 'userid',
            imageidx: image.postimgidx,
          }
        );

        setLiked((prevLiked) => ({
          ...prevLiked,
          [area]: !prevLiked[area],
        }));

        console.log(response.data.message);
      } else {
        console.error('Image not found');
      }
    } catch (error) {
      console.error('Like status change error:', error);
    }
  };

  const handleImageClick = (imageUrl) => {
    setIsModalOpen(true);
    setExpandedImageUrl(imageUrl);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setExpandedImageUrl('');
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_HOST}/getimg`
        );
        const imagesWithIndex = response.data.map((image, index) => ({
          ...image,
          postimgidx: index + 1,
        }));
        setImages(imagesWithIndex);
        console.log('받아온 이미지 test: ', imagesWithIndex);
      } catch (error) {
        console.error('client 이미지 가져오기 에러:', error);
      }
    };

    fetchImages();
  }, []);
  return (
    <>
      <div className='OOTDContainer'>
        {images.map((image, index) => (
          <div className={`area${index + 1}`} key={index}>
            <img
              src={`${process.env.REACT_APP_HOST}/uploads/audioimg5.png`}
              alt={`OOTD${index + 1}`}
              onClick={() => handleImageClick(image.imageUrl)}
            />
          </div>
        ))}

        {images.map((image, index) => (
          <div className={`area${index + 1}`} key={index}>
            <img
              src={`${process.env.REACT_APP_HOST}/uploads/audioimg5.png`}
              alt={`OOTD${index + 1}`}
              onClick={() => handleImageClick(image.imageUrl)}
            />
          </div>
        ))}
        <div className='area3'>
          <img
            src='img/OOTD3.jpg'
            alt=''
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
            isOpen={isModalOpen}
            onRequestClose={handleCloseModal}
            contentLabel='Expanded Image Modal'
          >
            <button onClick={handleCloseModal}>Close</button>
            {expandedImageUrl &&
              expandedImageUrl ===
                `${process.env.REACT_APP_HOST}/uploads/audioimg5.png` && (
                <img src={expandedImageUrl} alt='Expanded' />
              )}
          </Modal>
        </div>
        <div className='area4'>
          <img
            src='img/OOTD4.jpg'
            alt=''
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
            alt=''
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
            alt=''
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
            alt=''
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
            alt=''
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
