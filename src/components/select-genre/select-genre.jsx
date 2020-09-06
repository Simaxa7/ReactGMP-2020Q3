import React, { useState } from 'react';
import Select from 'react-select';

import './select-genre.css';

const options = [
  { value: 'RELEASE DATE', label: 'RELEASE DATE' },
  { value: 'VOTE AVERAGE', label: 'VOTE AVERAGE' },
  { value: 'RUNTIME', label: 'RUNTIME' },
  { value: 'REVENUE', label: 'REVENUE' },
  { value: 'BUDGET', label: 'BUDGET' },
];

const SelectGenre = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const setNewSelectedOption = (e) => setSelectedOption(e.target);

  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: '#fff' }),
    input: (styles) => ({ ...styles, backgroundColor: '#ddd' }),
    option: (styles, {
      isDisabled, isFocused, isSelected,
    }) => { // eslint-disable-line
      return {
        ...styles,
        backgroundColor: isDisabled
          ? null
          : isSelected
            ? '#232323'
            : isFocused
              ? '#555555'
              : '#fff',
        color: isDisabled
          ? 'red'
          : isSelected
            ? '#f65261'
            : '#232323',
        cursor: isDisabled ? 'not-allowed' : 'default',

        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled
            && (isSelected ? 'white' : '#232323'),
        },
      };
    },
  };

  const handleChange = (e) => {
    setNewSelectedOption(e);
  };

  return (
    <>
      <span className="select-genre-descriptions">SORTED BY:</span>
      <div className="select-genre">
        <Select
          className="select-genre-dropdown"
          value={selectedOption}
          onChange={handleChange}
          options={options}
          styles={colourStyles}
        />
      </div>
    </>
  );
};

export default SelectGenre;
