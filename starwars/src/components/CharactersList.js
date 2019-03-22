import React from 'react';
import Character from './Character';

const CharactersList = ({characters}) => {
  return (
    <div className="grid-card">
      {characters.map(({name, height, mass, created, films, url}) => {
        return (
          <Character
            key={created}
            name={name}
            height={height}
            mass={mass}
            films={films}
            url={url}
          />
        );
      })}
    </div>
  );
};

export default CharactersList;
