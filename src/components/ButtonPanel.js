import React from 'react';
import Button from './Button';

class ButtonPannel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const groups = [
      ['AC', '+/-', '%', '÷'],
      ['7', '8', '9', 'X'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['0', '.', '='],
    ];

    return (
      <div className="App">
        <div className="" id="G1">
          { groups[0].map(e => <Button buttonName={e} key={e} />) }
        </div>
        <div className="" id="G2">
          { groups[1].map(e => <Button buttonName={e} key={e} />) }
        </div>
        <div className="" id="G3">
          { groups[2].map(e => <Button buttonName={e} key={e} />) }
        </div>
        <div className="" id="G4">
          { groups[3].map(e => <Button buttonName={e} key={e} />) }
        </div>
        <div className="" id="G5">
          { groups[4].map(e => <Button buttonName={e} key={e} />) }
        </div>
      </div>
    );
  }
}

export default ButtonPannel;
