import React from 'react';

function BookingPopup({ flight, onClose, onConfirm }) {
  const handleConfirm = () => {
    onConfirm(flight);
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h3>Confirm Your Booking</h3>
        <p><strong>Airline:</strong> {flight.airline}</p>
        <p><strong>Route:</strong> {flight.from} ➜ {flight.to}</p>
        <p><strong>Price:</strong> ₹{flight.price}</p>
        <button onClick={handleConfirm} style={{ marginRight: '10px' }}>Confirm</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default BookingPopup;
