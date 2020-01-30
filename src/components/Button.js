import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonName, className }) => (
  <button id={`btn-${buttonName}`} type="button" className={className}>{ buttonName }</button>
);

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
