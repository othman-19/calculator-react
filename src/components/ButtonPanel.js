import React from 'react';
import Button from './Button';
import '../index.css';

const ButtonPannel = () => (
  <div className="App">
    <div className="group">
      <Button color="rgb(163, 163, 172)" buttonName="AC" />
      <Button color="rgb(163, 163, 172)" buttonName="+/-" />
      <Button color="rgb(163, 163, 172)" buttonName="%" />
      <Button buttonName="÷" />
    </div>
    <div className="group">
      <Button color="rgb(163, 163, 172)" buttonName="7" />
      <Button color="rgb(163, 163, 172)" buttonName="8" />
      <Button color="rgb(163, 163, 172)" buttonName="9" />
      <Button buttonName="x" />
    </div>
    <div className="group">
      <Button color="rgb(163, 163, 172)" buttonName="4" />
      <Button color="rgb(163, 163, 172)" buttonName="5" />
      <Button color="rgb(163, 163, 172)" buttonName="6" />
      <Button buttonName="-" />
    </div>
    <div className="group">
      <Button color="rgb(163, 163, 172)" buttonName="1" />
      <Button color="rgb(163, 163, 172)" buttonName="2" />
      <Button color="rgb(163, 163, 172)" buttonName="3" />
      <Button buttonName="+" />
    </div>
    <div className="group">
      <Button color="rgb(163, 163, 172)" buttonName="0" wide />
      <Button color="rgb(163, 163, 172)" buttonName="." />
      <Button buttonName="=" />
    </div>
  </div>
);

export default ButtonPannel;
