import React, { useState, useEffect } from 'react';

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => {
        setShows(data);
      });
  }, []);

  return (
    <div className="name">
      
      <div className="use">
        {shows.map(show => (
          <div key={show.show.id} className="tv-item">
            <a href={`/show/${show.show.id}`}>
              <div className="show">
                {show.show.image && (
                  <img
                    src={show.show.image.medium}
                    alt={show.show.name}
                    className="show-image"
                  />
                )}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;

