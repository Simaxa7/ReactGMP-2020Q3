import React from 'react';
import PropTypes from 'prop-types';

import buttonType from './button-config.json';
import './button-close.css';

function ButtonClose(props) {
  const { type, text, onClickFunc } = props.options;

  return (
    <button
      className={`${buttonType[type]}`}
      onClick={onClickFunc}
      type="button"
    >
      {text}
    </button>
  );
}

ButtonClose.propTypes = {
  options: PropTypes.shape({
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClickFunc: PropTypes.instanceOf(Function).isRequired,
  }),
};

ButtonClose.defaultProps = {
  options: {},
};

export default ButtonClose;
