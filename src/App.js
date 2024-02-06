import React from 'react';
import Navbar from './components/Navbar';
import { DatePicker } from 'antd';
import MyCarousel from './components/MyCarousel';
import AppFooter from './components/Footer';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <div className = 'title'>
        <h1>Now Showing</h1>

        <DatePicker />
        </div>
        <MyCarousel/>
        <AppFooter/>
    </div>
  );
}

export default App;
