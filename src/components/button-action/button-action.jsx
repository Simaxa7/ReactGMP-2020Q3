import React from 'react';
import PropTypes from 'prop-types';

import './button-action.css';

function ButtonAction(props) {
  const { type, text, onClickFunc } = props.options;

  return (
    <button
      className={`${type} button-close`}
      onClick={onClickFunc}
      type="button"
    >
      {text}
    </button>
  );
}

ButtonAction.propTypes = {
  options: PropTypes.shape({
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClickFunc: PropTypes.instanceOf(Function).isRequired,
  }),
};

ButtonAction.defaultProps = {
  options: {},
};


export default ButtonClose;