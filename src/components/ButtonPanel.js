import React from 'react';

class ButtonPannel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <p>
          ButtonPannel component connected
        </p>
        <div className="" id="G1">
          <button type="submit">AC</button>
          <button type="submit">+/-</button>
          <button type="submit">%</button>
          <button type="submit">+</button>
        </div>
        <div className="" id="G2">
          <button type="submit">7</button>
          <button type="submit">8</button>
          <button type="submit">9</button>
          <button type="submit">X</button>
        </div>
        <div className="" id="G3">
          <button type="submit">4</button>
          <button type="submit">6</button>
          <button type="submit">5</button>
          <button type="submit">-</button>
        </div>
        <div className="" id="G4">
          <button type="submit">1</button>
          <button type="submit">2</button>
          <button type="submit">3</button>
          <button type="submit">+</button>
        </div>
        <div className="" id="G5">
          <button type="submit">0</button>
          <button type="submit">,</button>
          <button type="submit">=</button>
        </div>
      </div>
    );
  }
}

export default ButtonPannel;
