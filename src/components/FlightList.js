import React from 'react';

function FlightList({ flights, onBook }) {
  if (flights.length === 0) return <p style={{ textAlign: 'center' }}>No flights available. Please search above.</p>;

  return (
    <ul>
      {flights.map((flight) => (
        <li key={flight.id}>
          <div>
            <strong>{flight.airline}</strong><br />
            {flight.from} ➜ {flight.to} – ₹{flight.price}
          </div>
          <button onClick={() => onBook(flight)}>Book</button>
        </li>
      ))}
    </ul>
  );
}

export default FlightList;

