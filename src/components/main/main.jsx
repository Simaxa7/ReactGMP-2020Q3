import React from 'react';
import PropTypes from 'prop-types';
import MoviesCardList from '../movies-card-list';
import FilmGenre from '../film-genre';
import SelectGenre from '../select-genre';

import './main.css';

function Main(props) {
  const {
    count,
    moviesData,
    onDeleteItem,
  } = props;

  return (
    <div className="main">
      <div className="wrap-large">
        <div className="d-flex-between-aligned decoration-line-sorting">
          <FilmGenre />
          <div className="d-flex-between-aligned">
            <SelectGenre />
          </div>
        </div>
        { count === 0
          ? (
            <div className="no-movie">No Movie Found</div>
          )
          : (
            <>
              <p className="count-of-movies">
                { `${count}  movies found ` }
              </p>
              <MoviesCardList
                moviesData={moviesData}
                onDeleteItem={onDeleteItem}
              />
            </>
          )}
      </div>
    </div>
  );
}

Main.propTypes = {
  count: PropTypes.number.isRequired,
  moviesData: PropTypes.instanceOf(Array).isRequired,
  onDeleteItem: PropTypes.instanceOf(Function).isRequired,
};

export default Main;