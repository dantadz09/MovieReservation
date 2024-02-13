import SeatNumber from './SeatNumber';
import { Button, Card } from 'antd';
//kylie
import { useState } from 'react';
import axios, { Axios } from 'axios';

function Seat() {
  const [inputReserve, setInputReserve] = useState({
    mov_ID: "",
    start_time: "",
    tickets: "",
    seats: "",
    subtotal: "",
    discount: "",
    total: "",
  });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setInputReserve((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }))
  // }

  const postReserveClick=async() => {
    try {
      const response = await Axios.post('http://127.0.0.1:1337/api/addReservation', inputReserve);
      console.log(response.data)
    } catch (error) {
      console.error('Error', error);
    }
  };


  return (
    <div className='seat-container' style={{ width: '80%', margin: 'auto' }}>
      <div className='title-container' style={{ textAlign: 'center' }}>
        <h1>Cinema 1</h1>
      </div>
      <div className='seat-box' style={{ width: '50%', float: 'left' }}>
        <SeatNumber />
        <div className='screen-box'>
          <h2>SCREEN</h2>
        </div>
      </div>
      <div className='info-box'>
        <h3 style={{marginBottom: '1em'}}>Movie:</h3>
        <h3 style={{marginBottom: '1em'}}>Date/Time:</h3>
        <h3 style={{marginBottom: '1em'}}>Tickets:</h3>
        <h3 style={{marginBottom: '1em'}}>Seats:</h3>
        <h3 style={{marginBottom: '1em'}}>Subtotal:</h3>
        <h3 style={{marginBottom: '1em'}}> Discount:</h3>
        <h3 style={{marginBottom: '1em'}}>Total:</h3>
        <Button type="primary" onClick={postReserveClick} style={{ background: 'black', marginBottom: '1em', fontSize: '16px', width: '8em', height: '50px' }}>BUY NOW</Button>
        <div className='card-box' style={{ display: 'flex', alignItems: 'center' }}>
        <Card style={{ backgroundColor: '#f0f2f5', width: '3em', height: '3em', marginRight: '1em' }} />
        <h3>AVAILABLE</h3>
        <Card style={{ backgroundColor: '#90EE90', width: '3em', height: '3em',marginLeft: '5em',marginRight: '1em'}}></Card>
        <h3>SELECTED</h3>
        </div>
        <div className='card-box' style={{ display: 'flex', alignItems: 'center', marginTop: '2em'}}>
        <Card style={{ backgroundColor: 'red', width: '3em', height: '3em',marginRight: '1em',marginBottom: '3em'}}></Card>
        <h3 style ={{marginBottom: '3em'}}>SOLD</h3>
        </div>
      </div>
    </div>
  );
}

export default Seat;