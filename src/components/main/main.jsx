import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import MoviesCardList from '../movies-card-list';
import FilmGenre from '../film-genre';
import SelectGenre from '../select-genre';

import './main.css';

const Main = (props) => {
  const {
    count,
    moviesData,
    onDeleteItem,
    onShowMovieDetails,
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
                onShowMovieDetails={onShowMovieDetails}
              />
            </>
          )}
      </div>
    </div>
  );
};

Main.propTypes = {
  count: PropTypes.number.isRequired,
  moviesData: PropTypes.arrayOf(Array).isRequired,
  onDeleteItem: PropTypes.instanceOf(Function).isRequired,
  onShowMovieDetails: PropTypes.instanceOf(Function).isRequired,
};

export default withRouter(Main);
