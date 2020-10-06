import React, { useState } from 'react';

import './form-item-select.css';

const FormItemSelect = (props) => {
  console.log('props', props);
  const [showSelectOption, setShowSelectOption] = useState(false);
  const onClickSelectToggle = () => setShowSelectOption(!showSelectOption);

  const formGenreInputBoxClassName = `form-genre-input-box ${
    showSelectOption ? '' : 'invisible'}`;

  const genreList = [
    { type: 'documentary' },
    { type: 'comedy' },
    { type: 'horror' },
    { type: 'crime' },
  ];
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
        {genreList.map((genre) => (
          <label
            htmlFor={genre.type}
            className={`form-genre-${genre.type}-label`}
            key={genre.type}
          >
            <input
              // checked={
              //   checkedSelectors
              //   && checkedSelectors[genre.type]
              // }
              // onChange={(e) => props.onChangeCheckedSelectors(e)}
              type="checkbox"
              id={`form-genre-${genre.type}`}
              name={genre.type}
              className={`form-genre-${genre.type}-input`}
            />
            { genre.type }
          </label>
        ))}
      </div>
    </div>
  );
};

export default FormItemSelect;
