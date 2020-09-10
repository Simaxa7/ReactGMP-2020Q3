import React from 'react';
import PropTypes from 'prop-types';

import './search-panel.css';

const SearchPanel = (props) => {
  const {
    onSetSearchValue,
    searchValue,
  } = props;

  const handleSubmit = (e) => {
    console.log('handleSubmit');
    e.preventDefault();
  };

  return (
    <form className="search-panel-group" onSubmit={(e) => handleSubmit(e)}>
      <input
        placeholder="What do you want to watch?"
        className="search-panel-input"
        onChange={(e) => onSetSearchValue(e.target.value)}
        value={searchValue}
      />
      <button
        className="search-panel-button"
        type="submit"
      >
        SEARCH
      </button>
    </form>
  );
};

SearchPanel.propTypes = {
  onSetSearchValue: PropTypes.instanceOf(Function).isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default SearchPanel;
