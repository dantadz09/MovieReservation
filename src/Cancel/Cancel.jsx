import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import { useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';

function Cancel() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const getReservations = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:1337/api/get-all-reservations");
        setReservations(response.data.data); // Access data property
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    getReservations();
  }, []);


  return (
    <div className='container'>
        <div className='back-container'>
        <a href="http://localhost:3000/schedule" style={{ color: 'black', textDecoration: 'none'}}>← Back</a>
        </div>
        <div className='cancel-container'>
            <div className='reserve-container'>
                Reserved Tickets
            </div>
            <br></br>
            <table className='ticket-container'>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Airing Time</th>
                  <th>Seat</th>
                  <th>Total</th>
                  <th>Senior Citizen</th>
                  <th>PWD</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map(reservation => (
                  <tr key={reservation._id}>
                    <td>{reservation.mov_ID.title}</td>
                    <td>{reservation.airing_time}</td>
                    <td>{reservation.seat.map(seat => seat.seatNumber).join(', ')}</td>
                    <td>{reservation.total_price}</td>
                    <td>{reservation.discount.senior_citizen ? 'Yes' : 'No'}</td>
                    <td>{reservation.discount.pwd ? 'Yes' : 'No'}</td>
                    <td><button>Edit</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
    </div>
  )
}

export default Cancel