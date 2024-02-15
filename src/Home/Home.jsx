import React, { useState, useCallback } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import MyCarousel from './MyCarousel';

function Home() {
  const [selectedDate, setSelectedDate] = useState(moment('2024-02-14'));

  const handleDateChange = useCallback((date) => {
    setSelectedDate(date);
  }, []);

  return (
    <div>
      <div className='title'>
        <h1>Now Showing</h1>
        <DatePicker onChange={handleDateChange} allowClear={false}/>
      </div>
      <MyCarousel selectedDate={selectedDate} />
    </div>
  );
}

export default Home;









// import React from 'react'
// import { DatePicker } from 'antd'
// import MyCarousel from './MyCarousel'
// function Home() {
//   return (
//     <div>
//         <div className = 'title'>
//         <h1>Now Showing</h1>
//         <DatePicker />
//         </div>
//         <MyCarousel/>
//     </div>
//   )
// }

// export default Home