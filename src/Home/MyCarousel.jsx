import React, { useRef, useState, useEffect } from 'react';
import { Carousel, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import axios from 'axios';

const MyCarousel = ({ selectedDate }) => {
  const carouselRef = useRef(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        console.log('Fetching movies for date:', selectedDate.format('YYYY-MM-DD'));
        const response = await axios.get('http://localhost:1337/api/get-all-movies', {
          params: { date: selectedDate.format('YYYY-MM-DD') }
        });
        console.log('Received movies:', response.data.data);
        setMovies(response.data.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [selectedDate]);

  console.log("Sorted movies:", movies);

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
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  // Function to check if the airing date of a movie matches the selected date
  const isMovieOnSelectedDate = (movie) => {
    if (!movie || !movie.airing_time || movie.airing_time.length === 0) {
      return false;
    }
    const airingDate = new Date(movie.airing_time[0].start_time);
    return airingDate.toDateString() === selectedDate.toDate().toDateString();
  };

  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <Carousel {...settings} ref={carouselRef}>
        {movies.map((movie, index) => (
          <div key={index} className='movie-container'>
            {/* Only render the movie if it matches the selected date */}
            {isMovieOnSelectedDate(movie) && (
              <div className='cinema-container' style={{ width: '50%', float: 'left'}}>
                <h2>Cinema {movie.cin_ID}</h2>
                <div className='movie-item'>
                  <img src={movie.image} alt={`Movie ${index * 2}`} style={{ width: '80%', float: 'left'}} />
                </div>
              </div>
            )}
          </div>
        ))}
      </Carousel>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <Button onClick={handlePrev} style={{ marginRight: '5px' }}>
          <LeftOutlined />
        </Button>
        <Button onClick={handleNext}>
          <RightOutlined />
        </Button>
      </div>
    </div>
  );
};

export default MyCarousel;






// import React, { useRef } from 'react';
// import { Carousel, Button } from 'antd';
// import { LeftOutlined, RightOutlined } from '@ant-design/icons';
// import 'antd/es/carousel/style/index';

// const MyCarousel = () => {
//   const carouselRef = useRef(null);

//   const handlePrev = () => {
//     if (carouselRef.current) {
//       carouselRef.current.prev();
//     }
//   };

//   const handleNext = () => {
//     if (carouselRef.current) {
//       carouselRef.current.next();
//     }
//   };

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div style={{ width: '80%', margin: 'auto' }}>
//       <Carousel {...settings} ref={carouselRef}>  
//         <div className='movie-container'>
//           <div className='cinema-container' style={{ width: '50%', float: 'left' }}>
//             <h2>Cinema 1</h2>
//             <div className='movie-item'>
//               <img src={require('../image/avengers.jpg')} alt="Avengers" style={{ width: '40%', float: 'left' }} />
//               <img src={require('../image/annabelle.jpg')} alt="Annabelle" style={{ width: '40%', float: 'left',marginLeft:'5px' }} />
//             </div>
//           </div>
//           <div className='cinema-container' style={{ width: '50%', float: 'left' }}>
//             <h2>Cinema 2</h2>
//             <div className='movie-item'>
//             <img src={require('../image/elemental.jpg')} alt="Elemental" style={{ width: '40%', float: 'left' }} />
//               <img src={require('../image/no-hard-feelings.jpg')} alt="No Hard Feelings" style={{ width: '40%', float: 'left',marginLeft:'5px' }} />
//             </div>
//           </div>
//           <div style={{ clear: 'both' }}></div>
//         </div>
//         <div className='movie-container'>
//           <div className='cinema-container' style={{ width: '50%', float: 'left' }}>
//             <h2>Cinema 3</h2>
//             <div className='movie-item'>
//             <img src={require('../image/gone-girl.jpg')} alt="Avengers" style={{ width: '40%', float: 'left' }} />
//             <img src={require('../image/dates.jpg')} alt="Annabelle" style={{ width: '40%', float: 'left',marginLeft:'5px' }} />
//             </div>
//           </div>
//           <div className='cinema-container' style={{ width: '50%', float: 'left' }}>
//             <h2>Cinema 4</h2>
//             <div className='movie-item'>
//             <img src={require('../image/transformers.jpg')} alt="Avengers" style={{ width: '40%', float: 'left' }} />
//             <img src={require('../image/benjamin.jpg')} alt="Annabelle" style={{ width: '40%', float: 'left',marginLeft:'5px' }} />
//             </div>
//           </div>
//           <div style={{ clear: 'both' }}></div> 
//         </div>
//       </Carousel>
//       <div style={{ textAlign: 'center', marginTop: '10px' }}>
//       <Button onClick={handlePrev} style={{ marginRight: '5px' }}>
//         <LeftOutlined />
//         </Button>
//         <Button onClick={handleNext}>
//           <RightOutlined />
//           </Button>
//       </div>
//     </div>
//   );
// };

// export default MyCarousel;