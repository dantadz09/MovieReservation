import React from 'react'
import { Button } from 'antd'

function Schedule() {
  return (
    <div>
      <div className='container' style={{ width: '80%', margin: 'auto', marginTop: '2em' }}>
        <a href="http://localhost:3000/" style={{ color: 'black', textDecoration: 'none' }}>← Back</a>
          <div className='movie-container' style={{ marginBottom: '20px' }}> 
          <img src={require('../image/avengers.jpg')} alt="Avengers" style={{ width: '30%', float: 'left' }} />
      </div>
      <div className='movie-info' style={{ marginLeft: '32%', marginTop: '-45px' }}> 
        <p style={{marginBottom: '2em',fontSize: '40px'}}>Cinema 1</p>
        <h1 style={{marginBottom: '2em',fontSize: '50px'}}>Movie Title</h1>
        <h1 style={{marginBottom: '-0.4em',fontSize: '45px'}}>SHOWTIMES</h1>
        <p style={{ fontSize: '20px',marginTop: '2em',marginBottom: '2em' }}>January 20, 2024</p>
        <div>
          <Button type="primary" className="button-style">1:15 PM</Button>
          <Button type="primary" className="button-style">5:30 PM</Button>
          <Button type="primary" className="button-style">10:00 PM</Button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Schedule