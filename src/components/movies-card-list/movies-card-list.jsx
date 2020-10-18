import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import './movies-card-list.css';
import MoviesCardListItem from '../movies-card-list-item';
import { setItemActive } from '../../redux/actions/actionsQuerry';
import { deleteItem } from '../../redux/actions/actionsGenre';

const MoviesCardList = () => {
  const { qOptions } = useSelector((state) => state);
  const history = useHistory();

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
    const {
      id, title, genres, posterPath, release,
    } = el;
    const movieData = currentData.data.filter((elem) => elem.id === id)[0];

    const onClickItem = () => {
      history.push(`/film/${id}`);
      dispatch(setItemActive({ id, data: movieData }));
    };

    return (
      <div
        key={id}
        className="movies-card-list-item "
        onClick={onClickItem}
        onKeyDown={onClickItem}
        tabIndex={0}
        role="button"
      >
        <MoviesCardListItem
          id={id}
          title={title}
          genres={genres}
          posterPath={posterPath}
          release={release}
          onDeleteItem={() => dispatch(deleteItem({ id, options: qOptions }))}
          itemData={movieData}
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

export default MoviesCardList;
