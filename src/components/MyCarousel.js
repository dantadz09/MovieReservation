import React, { useRef } from 'react';
import { Carousel, Button } from 'antd';
import 'antd/es/carousel/style/index';

const MyCarousel = () => {
  const carouselRef = useRef(null);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <Carousel {...settings} ref={carouselRef}>  
        <div className='movie-container'>
          <h2>Cinema 1</h2>
          <div className='movie-item'>
          <img src={require('../image/avengers.jpg')} alt="Avengers"style={{width: '20%'}} />
          </div>
          <div className='movie-item'>
          <img src={require('../image/annabelle.jpg')} alt="Avengers"style={{width: '20%'}} />
          </div>
        </div>
        <div>Content 2</div>
      </Carousel>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <Button onClick={handlePrev} style={{ marginRight: '5px' }}>
          Previous
        </Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
    </div>
  );
};

export default MyCarousel;
