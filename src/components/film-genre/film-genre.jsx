import React, { useState } from 'react';

import './film-genre.css';

const FilmGenre = () => {
  const [activeItem, setActiveItem] = useState(2);

  return (
    <div className="film-genre">
      <button
        type="button"
        className={`film-genre-item ${activeItem === 1 ? 'active' : ''}`}
        onClick={() => setActiveItem(1)}
      >
        ALL
      </button>
      <button
        type="button"
        className={`film-genre-item ${activeItem === 2 ? 'active' : ''}`}
        onClick={() => setActiveItem(2)}
      >
        DOCUMENTARY
      </button>
      <button
        type="button"
        className={`film-genre-item ${activeItem === 3 ? 'active' : ''}`}
        onClick={() => setActiveItem(3)}
      >
        COMEDY
      </button>
      <button
        type="button"
        className={`film-genre-item ${activeItem === 4 ? 'active' : ''}`}
        onClick={() => setActiveItem(4)}
      >
        HORROR
      </button>
      <button
        type="button"
        className={`film-genre-item ${activeItem === 5 ? 'active' : ''}`}
        onClick={() => setActiveItem(5)}
      >
        CRIME
      </button>
    </div>
  );
};

export default FilmGenre;
