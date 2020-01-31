import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../index.css';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const newCalcul = calculate(this.state, buttonName);
    this.setState({ ...newCalcul, currentButton: buttonName });
  }

  render() {
    const { next, total } = this.state;
    return (
      <div className="container">
        <header className="header">Easy Online Calculator</header>
        <div className="App">
          <Display result={next || total} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
        <footer className="footer">&copy; Developed by Othmane Namani, 2020</footer>
      </div>
    );
  }
}

export default App;
