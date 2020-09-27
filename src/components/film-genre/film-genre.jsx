import React, { useEffect } from 'react';
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

  // eslint-disable-next-line
  useEffect(() => { dispatch(filmGenreAll()); }, []);

  // eslint-disable-next-line
  useEffect(() => { dispatch(setViewData(genreSort)); }, [genreSort]);

  return (
    <div className="film-genre">
      <button
        type="button"
        className={
          `film-genre-item ${genreType === 'FILM_GENRE_ALL' ? 'active' : ''}`
        }
        onClick={() => dispatch(filmGenreAll())}
      >
        ALL
      </button>
      <button
        type="button"
        className={
          `film-genre-item ${genreType === 'FILM_GENRE_DOCUMENTARY'
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
          `film-genre-item ${genreType === 'FILM_GENRE_COMEDY' ? 'active' : ''}`
        }
        onClick={() => dispatch(filmGenreComedy())}
      >
        COMEDY
      </button>
      <button
        type="button"
        className={
          `film-genre-item ${genreType === 'FILM_GENRE_HORROR' ? 'active' : ''}`
        }
        onClick={() => dispatch(filmGenreHorror())}
      >
        HORROR
      </button>
      <button
        type="button"
        className={
          `film-genre-item ${genreType === 'FILM_GENRE_CRIME' ? 'active' : ''}`
        }
        onClick={() => dispatch(filmGenreCrime())}
      >
        CRIME
      </button>
    </div>
  );
};

export default FilmGenre;
