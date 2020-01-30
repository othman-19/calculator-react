import React from 'react';
import Button from './Button';
import '../index.css';

const ButtonPannel = () => {
  const groups = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  return (
    <div className="App">
      <div className="group" id="G1">
        { groups[0].filter(e => e !== groups[0][groups[0].length - 1])
          .map(e => <Button color="rgb(163, 163, 172)" className="Button" buttonName={e} key={e} />) }
        <Button className="Button" buttonName={groups[0][groups[0].length - 1]} key={groups[0][groups[0].length - 1]} />
      </div>
      <div className="group" id="G2">
        { groups[1].filter(e => e !== groups[1][groups[1].length - 1])
          .map(e => <Button color="rgb(163, 163, 172)" className="Button" buttonName={e} key={e} />) }
        <Button className="Button" buttonName={groups[1][groups[1].length - 1]} key={groups[1][groups[1].length - 1]} />
      </div>
      <div className="group" id="G3">
        { groups[2].filter(e => e !== groups[2][groups[2].length - 1])
          .map(e => <Button color="rgb(163, 163, 172)" className="Button" buttonName={e} key={e} />) }
        <Button className="Button" buttonName={groups[2][groups[2].length - 1]} key={groups[2][groups[2].length - 1]} />
      </div>
      <div className="group" id="G4">
        { groups[3].filter(e => e !== groups[3][groups[3].length - 1])
          .map(e => <Button color="rgb(163, 163, 172)" className="Button" buttonName={e} key={e} />) }
        <Button className="Button" buttonName={groups[3][groups[3].length - 1]} key={groups[3][groups[3].length - 1]} />
      </div>
      <div className="group" id="G5">
        <Button color="rgb(163, 163, 172)" className="Button" buttonName={groups[4][0]} wide key={groups[4][groups[4].length - 1]} />
        { groups[4].filter(e => e !== groups[4][0] && e !== groups[4][groups[4].length - 1])
          .map(e => <Button color="rgb(163, 163, 172)" className="Button" buttonName={e} key={e} />) }
        <Button className="Button" buttonName={groups[4][groups[4].length - 1]} key={groups[4][groups[4].length - 1]} />
      </div>
    </div>
  );
};

export default ButtonPannel;
