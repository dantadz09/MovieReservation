import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Cancel() {
  const [reservations, setReservations] = useState([]);
  const [filteredReservationId, setFilteredReservationId] = useState('');
  const [filteredReservation, setFilteredReservation] = useState(null);

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

  const handleInputChange = (event) => {
    setFilteredReservationId(event.target.value);
  }

  const handleFilter = () => {
    const reservation = reservations.find(reservation => reservation.id === filteredReservationId);
    if (reservation) {
      setFilteredReservation(reservation);
    } else {
      setFilteredReservation(null);
    }
  }

  const handleDelButtonClick = async (reservationId) => {
    try {
      let text = "Are you sure?";
      if (window.confirm(text) === true) {
        const response = await axios.post(`http://127.0.0.1:1337/api/update-reservation/${reservationId}`, {
          "is_cancelled": true
        });
        // Optionally handle success action
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
        <div>
          <label htmlFor="reservationId">Reservation ID:</label>
          <input type="text" id="reservationId" name="reservationId" value={filteredReservationId} onChange={handleInputChange} />
          <button onClick={handleFilter}>Filter</button>
        </div>
        <br></br>
        <table className='ticket-container'>
          <thead>
            <tr>
              <th>Reservation ID</th>
              <th>Title</th>
              <th>Airing Time</th>
              <th>Seat</th>
              <th>Total</th>
              <th>Senior Citizen</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredReservation ? (
              <tr key={filteredReservation.id}>
                <td>{filteredReservation.id}</td>
                <td>{filteredReservation.title}</td>
                <td>{new Date(filteredReservation.start_time).toLocaleString()}</td>
                <td>{filteredReservation.seat.map(seat => seat.seatNumber).join(', ')}</td>
                <td>{filteredReservation.total_price}</td>
                <td>{filteredReservation.senior_citizen}</td>
                <td><button onClick={() => handleDelButtonClick(filteredReservation.id)}>Delete</button></td>
              </tr>
            ) : (
              reservations.map(reservation => (
                <tr key={reservation.id}>
                  <td>{reservation.id}</td>
                  <td>{reservation.title}</td>
                  <td>{new Date(reservation.start_time).toLocaleString()}</td>
                  <td>{reservation.seat.map(seat => seat.seatNumber).join(', ')}</td>
                  <td>{reservation.total_price}</td>
                  <td>{reservation.senior_citizen}</td>
                  <td><button onClick={() => handleDelButtonClick(reservation.id)}>Delete</button></td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Cancel;
