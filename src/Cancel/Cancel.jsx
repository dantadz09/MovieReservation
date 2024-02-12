import React from 'react'

function Cancel() {
  return (
    <div className='container'>
        <div className='back-container'>
        <a href="http://localhost:3000/schedule" style={{ color: 'black', textDecoration: 'none'}}>← Back</a>
        </div>
        <div className='cancel-container'>
            <div className='reserve-container'>
                Reserved Tickets
            </div>
            <div className='ticket-container'>

            </div>
        </div>
    </div>
  )
}

export default Cancel