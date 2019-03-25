import React from 'react';
import './StarWars.css';

const Character = ({name, mass, height, films}) => {
  return (
    <div className="characters-card">
      <div className="character-info">
        <h2>{name}</h2>
        <p>Mass: {mass}</p>
        <p>Height: {height}</p>
      </div>
      <div className="film-list">
        <h6>List of Films</h6>
        {films.map((film, index) => {
          return (
            <div key={index} className="films">
              <p>Film {index + 1}</p>
              <a href={film}>
                <button>View Details</button>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Character;
