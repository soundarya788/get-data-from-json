import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const BookingForm = () => {
  const location = useLocation();
  const movieDetails = location.state && location.state.movieDetails;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();
    
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPhone No', phone);
    
    setName('');
    setEmail('');
    setPhone('');
    

    alert('Booking successful!');
  };

  return (
    <div className="booking-form">
      <h2>Book Ticket for {movieDetails.name}</h2>
      
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input type="text" 
          value={name} 
          onChange={e => setName(e.target.value)} 
          />
        </label>
        <label>
          Email:
          <input type="email"
           value={email} 
           onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          Phone No:
          <input type="Phone No" 
          value={phone} 
          onChange={e => setPhone(e.target.value)} />
        </label>
    
        <button type="submit">Book now</button>
      </form>
    </div>
  );
};

export default BookingForm;
