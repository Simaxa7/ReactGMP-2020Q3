import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

import './movie-text-field.css';

const MovieTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  const isInValid = () => meta.touched && meta.error;

  return (
    <div className="data-input">
      <label htmlFor={`form-${label}`}>
        <>{label}</>
        <input
          id={`form-${label}`}
          name={`form-${label}`}
          // eslint-disable-next-line
          {...field}
          // eslint-disable-next-line
          {...props}
          className={isInValid() ? 'input-error' : ''}
        />
        { isInValid()
          ? <div className="error-message">{ meta.error }</div>
          : null }
      </label>
    </div>
  );
};

MovieTextField.propTypes = {
  label: PropTypes.string.isRequired,
};

export default MovieTextField;
