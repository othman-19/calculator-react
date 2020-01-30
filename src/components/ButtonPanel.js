import React from 'react';
import Button from './Button';
import '../index.css';

const ButtonPannel = () => (
  <div className="App">
    <div className="group" id="G1">
      <Button color="rgb(163, 163, 172)" className="Button" buttonName="AC" key="AC" />
      <Button color="rgb(163, 163, 172)" className="Button" buttonName="+/-" key="+/-" />
      <Button color="rgb(163, 163, 172)" className="Button" buttonName="%" key="%" />
      <Button className="Button" buttonName="÷" key="÷" />
    </div>
    <div className="group" id="G2">
      <Button color="rgb(163, 163, 172)" className="Button" buttonName="7" key="7" />
      <Button color="rgb(163, 163, 172)" className="Button" buttonName="8" key="8" />
      <Button color="rgb(163, 163, 172)" className="Button" buttonName="9" key="9" />
      <Button className="Button" buttonName="x" key="x" />
    </div>
    <div className="group" id="G3">
      <Button color="rgb(163, 163, 172)" className="Button" buttonName="4" key="4" />
      <Button color="rgb(163, 163, 172)" className="Button" buttonName="5" key="5" />
      <Button color="rgb(163, 163, 172)" className="Button" buttonName="6" key="6" />
      <Button className="Button" buttonName="-" key="-" />
    </div>
    <div className="group" id="G4">
      <Button color="rgb(163, 163, 172)" className="Button" buttonName="1" key="1" />
      <Button color="rgb(163, 163, 172)" className="Button" buttonName="2" key="2" />
      <Button color="rgb(163, 163, 172)" className="Button" buttonName="3" key="3" />
      <Button className="Button" buttonName="+" key="+" />
    </div>
    <div className="group" id="G5">
      <Button color="rgb(163, 163, 172)" className="Button" buttonName="0" key="0" wide />
      <Button color="rgb(163, 163, 172)" className="Button" buttonName="." key="." />
      <Button className="Button" buttonName="=" key="=" />
    </div>
  </div>
);


export default ButtonPannel;
