import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './form-item-select.css';
import createInitialChecked from '../../helpers/initialChecked';
import genreListRender from '../../helpers/genreListRender';

const FormItemSelect = (props) => {
  const { genres } = props;
  const [showSelectOption, setShowSelectOption] = useState(false);
  const onClickSelectToggle = () => setShowSelectOption(!showSelectOption);

  const formGenreInputBoxClassName = `form-genre-input-box ${
    showSelectOption ? '' : 'invisible'}`;

  const initialChecked = createInitialChecked(genres);

  return (
    <div
      className="form-genre"
    >
      <div className="form-genre-label">GENRE</div>
      <button
        className="form-genre-label-select"
        onClick={onClickSelectToggle}
        type="button"
      >
        Select genre
      </button>
      <div
        className={formGenreInputBoxClassName}
      >
        {genreListRender.map((genre) => (
          <label
            htmlFor={genre}
            className={`form-genre-${genre}-label`}
            key={genre}
          >
            <input
              defaultChecked={initialChecked[genre]}
              type="checkbox"
              id={`form-genre-${genre}`}
              name={genre}
              className={`form-genre-${genre}-input`}
            />
            { genre }
          </label>
        ))}
      </div>
    </div>
  );
};

FormItemSelect.propTypes = {
  genres: PropTypes.arrayOf(Array).isRequired,
};

export default FormItemSelect;
