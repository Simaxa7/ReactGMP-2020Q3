import React from 'react';
import PropTypes from 'prop-types';

import buttonStyleType from './button-config.json';
import './button-close.css';

const ButtonClose = (props) => {
  const {
    classType,
    type,
    text,
    onClickFunc,
  } = props.options;

  return (
    <button
      className={`${buttonStyleType[classType]}`}
      onClick={onClickFunc}
      // eslint-disable-next-line
      type={type ? type : 'button'}
    >
      {text}
    </button>
  );
};

ButtonClose.propTypes = {
  options: PropTypes.shape({
    classType: PropTypes.string.isRequired,
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClickFunc: PropTypes.instanceOf(Function),
  }),
};

ButtonClose.defaultProps = {
  options: {},
};

export default ButtonClose;
