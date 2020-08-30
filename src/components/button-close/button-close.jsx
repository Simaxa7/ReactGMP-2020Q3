import React from 'react';
import PropTypes from 'prop-types';

import './button-close.css';

function ButtonClose(props) {
  const { type, text, onClickFunc } = props.options;
  const buttonType = {
    buttonCloseSmall: 'button-close-small button-close',
    buttonCloseDefault: 'button-close-default button-close',
    buttonActionDefault: 'button-action-default button-action',
    buttonActionRevert: 'button-action-revert button-action',
  };

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
