import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

const Button = ({
  buttonName,
  color,
  wide,
  clickHandler,
}) => {
  const handleClick = buttonName => clickHandler(buttonName);
  return (
    wide ? <button onClick={() => { handleClick(buttonName); }} id={`btn-${buttonName}`} type="button" className="Button wide" style={{ background: color }}>{ buttonName }</button>
      : <button id={`btn-${buttonName}`} type="button" className="Button" style={{ background: color }}>{ buttonName }</button>
  );
};
Button.defaultProps = {
  color: 'orange',
  wide: false,
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
