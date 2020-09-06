import React from 'react';
import PropTypes from 'prop-types';

import './topOfHead.css';
import AppLogo from '../app-logo';
import ItemAdd from '../item-add/item-add';
import SearchPanel from '../search-panel';
import MovieDetails from '../movie-details';

function TopOfHead(props) {
  const {
    onChangeItem,
    isShowMovieDetails,
    movieData,
    onHideMovieDetails,
    onSetSearchValue,
    searchValue,
  } = props;

  return (
    <div className="wrap-large topOfHead">
      <div className="d-flex-between">
        <AppLogo />
        { !isShowMovieDetails
          ? (
            <ItemAdd
              onChangeItem={onChangeItem}
            />
          )
          : (
            <div
              className="magnifier"
              onClick={onHideMovieDetails}
              onKeyDown={onHideMovieDetails}
              tabIndex={0}
              role="button"
            >
              .
            </div>
          )}
      </div>
      {!isShowMovieDetails
        ? (
          <div className="topOfHead-search">
            <h2 className="topOfHead-search-title">FIND YOUR MOVIE</h2>
            <SearchPanel
              onSetSearchValue={onSetSearchValue}
              searchValue={searchValue}
            />
          </div>
        )
        : <MovieDetails movieData={movieData} />}
    </div>
  );
}

TopOfHead.propTypes = {
  onChangeItem: PropTypes.instanceOf(Function).isRequired,
  onHideMovieDetails: PropTypes.instanceOf(Function).isRequired,
  isShowMovieDetails: PropTypes.bool.isRequired,
  movieData: PropTypes.instanceOf(Object).isRequired,
  onSetSearchValue: PropTypes.instanceOf(Function).isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default TopOfHead;
