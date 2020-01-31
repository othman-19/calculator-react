import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../index.css';


const ButtonPanel = ({ clickHandler }) => {
  const handleClick = buttonName => clickHandler(buttonName);
  return (
    <div className="App">
      <div className="group">
        <Button color="rgb(163, 163, 172)" clickHandler={handleClick} buttonName="AC" />
        <Button color="rgb(163, 163, 172)" clickHandler={handleClick} buttonName="+/-" />
        <Button color="rgb(163, 163, 172)" clickHandler={handleClick} buttonName="%" />
        <Button buttonName="÷" clickHandler={handleClick} />
      </div>
      <div className="group">
        <Button color="rgb(163, 163, 172)" clickHandler={handleClick} buttonName="7" />
        <Button color="rgb(163, 163, 172)" clickHandler={handleClick} buttonName="8" />
        <Button color="rgb(163, 163, 172)" clickHandler={handleClick} buttonName="9" />
        <Button buttonName="x" clickHandler={handleClick} />
      </div>
      <div className="group">
        <Button color="rgb(163, 163, 172)" clickHandler={handleClick} buttonName="4" />
        <Button color="rgb(163, 163, 172)" clickHandler={handleClick} buttonName="5" />
        <Button color="rgb(163, 163, 172)" clickHandler={handleClick} buttonName="6" />
        <Button buttonName="-" clickHandler={handleClick} />
      </div>
      <div className="group">
        <Button color="rgb(163, 163, 172)" clickHandler={handleClick} buttonName="1" />
        <Button color="rgb(163, 163, 172)" clickHandler={handleClick} buttonName="2" />
        <Button color="rgb(163, 163, 172)" clickHandler={handleClick} buttonName="3" />
        <Button buttonName="+" clickHandler={handleClick} />
      </div>
      <div className="group">
        <Button color="rgb(163, 163, 172)" clickHandler={handleClick} buttonName="0" wide />
        <Button color="rgb(163, 163, 172)" clickHandler={handleClick} buttonName="." />
        <Button buttonName="=" clickHandler={handleClick} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
