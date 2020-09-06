import React from 'react';
import PropTypes from 'prop-types';

import './movie-details.css';

const MovieDetails = (props) => {
  const { movieData } = props;
  const {
    title,
    poster_path: posterPath,
    vote_average: voteAverage,
    release_date: releaseDate,
    overview,
    runtime,
  } = movieData;

  console.log('movieData', movieData);

  return (
    <div className="movie-details">
      <div className="movie-details--img-block">
        <img
          className="movie-details--img"
          src={posterPath}
          alt="lorem"
        />
      </div>
      <div className="movie-details--descriptions-block">
        <div className="d-flex">
          <div className="movie-details--title">{title}</div>
          <div className="movie-details--rating flex-all-centered">
            {voteAverage}
          </div>
        </div>
        <div className="movie-details--osckar">Osckar winning Movie</div>
        <div className="d-flex">
          <div className="movie-details--year">{releaseDate.slice(0, 4)}</div>
          <div className="movie-details--time">{`${runtime} min`}</div>
        </div>
        <div className="movie-details--description">{overview}</div>
      </div>

    </div>
  );
};

MovieDetails.propTypes = {
  movieData: PropTypes.instanceOf(Object).isRequired,
};

export default MovieDetails;
