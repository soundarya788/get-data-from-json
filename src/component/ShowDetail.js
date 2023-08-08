import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'; 

const ShowDetail = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => {
        setShow(data);
      });
  }, [id]);

  const handleOpenBookingForm = () => {
    navigate(`/booking/${id}`, { state: { movieDetails: show } });
  };
  
  return (
    <div className="name">
      {show && (
        <div>
          <h2>{show.name}</h2>
          <div>
            {show.image && (
              <img src={show.image.medium} alt={show.name} className="show-image" />
            )}
            <p>Language: {show.language}</p>
            <p>Runtime: {show.runtime} minutes</p>
            <h3>Summary</h3>
            <p dangerouslySetInnerHTML={{ __html: show.summary }} />
          </div>
          <button onClick={handleOpenBookingForm}>Book Ticket</button>
          <Link to="/" className="back-button">Back </Link>
        </div>
      )}
    </div>
  );
};

export default ShowDetail;

