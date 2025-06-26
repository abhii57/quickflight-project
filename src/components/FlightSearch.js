import React, { useState } from 'react';

function FlightSearch({ onSearch }) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(from, to);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={from} onChange={(e) => setFrom(e.target.value)} placeholder="From" />
      <input value={to} onChange={(e) => setTo(e.target.value)} placeholder="To" />
      <button type="submit">Search</button>
    </form>
  );
}

export default FlightSearch;
