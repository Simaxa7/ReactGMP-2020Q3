import React from 'react';

import './movies-card-list.css';
import PropTypes from 'prop-types';
import MoviesCardListItem from '../movies-card-list-item';

const MoviesCardList = (props) => {
  const { onDeleteItem, onShowMovieDetails } = props;

  const moviesCardsData = props.moviesData.map((el) => {
    let newGenres = [];
    if (Array.isArray(el.genres)) {
      newGenres = [...el.genres].join(' & ') || null;
    }

    const newEl = {
      id: el.id,
      title: el.title,
      genres: newGenres,
      posterPath: el.poster_path,
      release: el.release_date ? el.release_date.slice(0, 4) : undefined,
    };

    return newEl;
  });

  const viewData = [...moviesCardsData];

  const elements = viewData.map((el) => {
    const itemData = { ...el };
    const {
      id, title, genres, posterPath, release,
    } = el;

    return (
      <div
        key={id}
        className="movies-card-list-item "
        onClick={() => onShowMovieDetails(id)}
        onKeyDown={() => onShowMovieDetails(id)}
        tabIndex={0}
        role="button"
      >
        <MoviesCardListItem
          id={id}
          title={title}
          genres={genres}
          posterPath={posterPath}
          release={release}
          onDeleteItem={() => onDeleteItem(id)}
          itemData={itemData}
        />
      </div>
    );
  });

  return (
    <div className="movies-card-list">
      {elements}
    </div>
  );
};

MoviesCardList.propTypes = {
  moviesData: PropTypes.arrayOf(Array).isRequired,
  onDeleteItem: PropTypes.instanceOf(Function).isRequired,
  onShowMovieDetails: PropTypes.instanceOf(Function).isRequired,
};

export default MoviesCardList;
