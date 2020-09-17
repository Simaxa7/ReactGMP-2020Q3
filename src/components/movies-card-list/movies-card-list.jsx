import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './movies-card-list.css';
import PropTypes from 'prop-types';
import MoviesCardListItem from '../movies-card-list-item';
import { setItemActive } from '../../redux/actions/actionsQuerry';

const MoviesCardList = (props) => {
  const { onDeleteItem } = props;

  const dispatch = useDispatch();

  const { currentData } = useSelector((state) => state.viewData);

  const moviesCardsData = currentData.data.map((el) => {
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
    const movieData = currentData.data.filter((elem) => elem.id === id)[0];
    return (
      <div
        key={id}
        className="movies-card-list-item "
        onClick={() => dispatch(setItemActive({ id, data: movieData }))}
        onKeyDown={() => dispatch(setItemActive({ id, data: movieData }))}
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
  onDeleteItem: PropTypes.instanceOf(Function).isRequired,
};

export default MoviesCardList;
