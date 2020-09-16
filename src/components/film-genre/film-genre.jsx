import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './film-genre.css';
import * as actionGenre from '../../redux/actions/actionsGenre';
import setViewData from '../../redux/actions/actionsViewData';

const FilmGenre = () => {
  const {
    filmGenreAll,
    filmGenreDocumentary,
    filmGenreComedy,
    filmGenreHorror,
    filmGenreCrime,
  } = actionGenre;
  const dispatch = useDispatch();
  const { genreSort, genreType } = useSelector((state) => state.genre);

  dispatch(setViewData(genreSort));

  return (
    <div className="film-genre">
      <button
        type="button"
        className={
          `film-genre-item ${genreType === 'FILMGENREALL' ? 'active' : ''}`
        }
        onClick={() => dispatch(filmGenreAll())}
      >
        ALL
      </button>
      <button
        type="button"
        className={
          `film-genre-item ${genreType === 'FILMGENREDOCUMENTARY'
            ? 'active'
            : ''}`
        }
        onClick={() => dispatch(filmGenreDocumentary())}
      >
        DOCUMENTARY
      </button>
      <button
        type="button"
        className={
          `film-genre-item ${genreType === 'FILMGENRECOMEDY' ? 'active' : ''}`
        }
        onClick={() => dispatch(filmGenreComedy())}
      >
        COMEDY
      </button>
      <button
        type="button"
        className={
          `film-genre-item ${genreType === 'FILMGENREHORROR' ? 'active' : ''}`
        }
        onClick={() => dispatch(filmGenreHorror())}
      >
        HORROR
      </button>
      <button
        type="button"
        className={
          `film-genre-item ${genreType === 'FILMGENRECRIME' ? 'active' : ''}`
        }
        onClick={() => dispatch(filmGenreCrime())}
      >
        CRIME
      </button>
    </div>
  );
};

export default FilmGenre;
