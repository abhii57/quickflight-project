import React, { useState } from 'react';
import FlightSearch from './components/FlightSearch';
import FlightList from './components/FlightList';
import BookingPopup from './components/BookingPopup';
import './App.css';

function App() {
  const [flights, setFlights] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [bookingMessage, setBookingMessage] = useState('');

  const allFlights = [
    { id: 1, from: 'Hyderabad', to: 'Delhi', airline: 'IndiGo', price: 4000 },
    { id: 2, from: 'Hyderabad', to: 'Mumbai', airline: 'SpiceJet', price: 3500 },
    { id: 3, from: 'Delhi', to: 'Bangalore', airline: 'Air India', price: 5000 },
    { id: 4, from: 'Chennai', to: 'Delhi', airline: 'Vistara', price: 4500 },
    { id: 5, from: 'Mumbai', to: 'Hyderabad', airline: 'GoAir', price: 3000 },
  ];

  const handleSearch = (from, to) => {
    const results = allFlights.filter(
      (flight) =>
        flight.from.toLowerCase() === from.toLowerCase() &&
        flight.to.toLowerCase() === to.toLowerCase()
    );
    setFlights(results);
    setBookingMessage('');
  };

  const handleBooking = (flight) => {
    setSelectedFlight(null);
    setBookingMessage(`✅ Flight booked successfully with ${flight.airline} from ${flight.from} to ${flight.to} for ₹${flight.price}`);
  };

  return (
    <div className="App">
      <h1>QuickFlight Booking</h1>
      <FlightSearch onSearch={handleSearch} />
      <FlightList flights={flights} onBook={setSelectedFlight} />
      {selectedFlight && (
        <BookingPopup
          flight={selectedFlight}
          onClose={() => setSelectedFlight(null)}
          onConfirm={handleBooking}
        />
      )}
      {bookingMessage && <p style={{ textAlign: 'center', color: 'green', fontWeight: 'bold' }}>{bookingMessage}</p>}
    </div>
  );
}

export default App;
