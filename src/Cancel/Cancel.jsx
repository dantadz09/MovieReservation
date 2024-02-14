import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import { useEffect } from 'react';

function Cancel() {
  const [reservations, setReservations] = useState([]);
  const [delButtonClicked, setdelButtonClicked] = useState(false);

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


  // let text = "Press a button!\nEither OK or Cancel.";
  // if (confirm(text) == true) {
  //   text = "You pressed OK!";
  // } else {
  //   text = "You canceled!";
  // }
  // document.getElementById("demo").innerHTML = text;

  const handleDelButtonClick = async (reservationId) => {
    try {
      let text = "Are you sure?";
      if (window.confirm(text) == true) {
        const response = await axios.post(`http://127.0.0.1:1337/api/update-reservation/${reservationId}`, {
          "is_cancelled": true
        });
        setdelButtonClicked(true);
        window.location.reload();
      } 
    } catch (error) {
      console.error('Error', error);
    }
  }

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
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map(reservation => (
                  <tr key={reservation._id}>
                    <td>{reservation.mov_ID.title}</td>
                    <td>{reservation.mov_ID.airing_time.map((time, index) => (
                       <p key={index}>
                        {time.start_time}
                        {/* <td>{time.end_time}</td> */}
                        </p>
                    ))}
                    </td>
                    <td>{reservation.seat.map(seat => seat.seatNumber).join(', ')}</td>
                    <td>{reservation.total_price}</td>
                    <td>{reservation.discount.senior_citizen ? 'Yes' : 'No'}</td>
                    <td>{reservation.discount.pwd ? 'Yes' : 'No'}</td>
                    <td><button onClick={() => handleDelButtonClick(reservation._id)}>Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
    </div>
  )
}

export default Cancel