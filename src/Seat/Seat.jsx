import React from 'react';
import SeatNumber from './SeatNumber';
import { Button, Card } from 'antd';

function Seat() {
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
        <h3 style={{marginBottom: '2em'}}>Movie:</h3>
        <h3 style={{marginBottom: '2em'}}>Date/Time:</h3>
        <h3 style={{marginBottom: '2em'}}>Tickets:</h3>
        <h3 style={{marginBottom: '2em'}}>Seats:</h3>
        <h3 style={{marginBottom: '2em'}}>Subtotal:</h3>
        <h3 style={{marginBottom: '2em'}}> Discount:</h3>
        <h3 style={{marginBottom: '2em'}}>Total:</h3>
        <Button type="primary" style={{ background: 'black', marginBottom: '1em', fontSize: '16px', width: '8em', height: '50px' }}>BUY NOW</Button>
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
