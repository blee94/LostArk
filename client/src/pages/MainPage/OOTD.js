import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import '../../css/OOTD.css';
import axios from 'axios';

function OOTD() {
  const [images, setImages] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_HOST}/getimg`
        );
        setImages(response.data);
      } catch (error) {
        console.error('client 이미지 가져오기 에러:', error);
      }
    };

    fetchImages();
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage('');
  };

  return (
    <>
      <div className='OOTDContainer'>
        {images.map((image, index) => (
          <div
            className={`area${index + 1}`}
            key={`image-${index}`}
            onClick={() => openModal(image.postimg)}
          >
            <img
              src={`${process.env.REACT_APP_HOST}/${image.postimg}`}
              alt={`OOTD${index + 1}`}
            />
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='Image Modal'
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          },
          content: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: '#242222',
            border: 'none',
            width: '80%', // 너비 조절
            height: '80%', // 높이 조절
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}
      >
        <button onClick={closeModal}>닫기</button>
        {selectedImage && (
          <img
            src={`${process.env.REACT_APP_HOST}/${selectedImage}`}
            alt='Selected Img'
          />
        )}
      </Modal>
    </>
  );
}

export default OOTD;
