import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  buttonName,
  className,
  color,
  wide,
}) => {
  if (wide) {
    return (
      <button id={`btn-${buttonName}`} type="button" className={`${className} wide`} style={{ background: color }}>{ buttonName }</button>
    );
  }
  return (
    <button id={`btn-${buttonName}`} type="button" className={`${className}`} style={{ background: color }}>{ buttonName }</button>
  );
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

export default Button;
