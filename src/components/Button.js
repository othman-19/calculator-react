import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

const Button = ({
  buttonName,
  color,
  wide,
}) => (
  wide ? <button id={`btn-${buttonName}`} type="button" className="Button wide" style={{ background: color }}>{ buttonName }</button>
    : <button id={`btn-${buttonName}`} type="button" className="Button" style={{ background: color }}>{ buttonName }</button>
);
Button.defaultProps = {
  color: 'orange',
  wide: false,
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

export default Button;
