import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <header className="header">Easy Online Calculator</header>
        <div className="App">
          <Display />
          <ButtonPanel />
        </div>
        <footer className="footer">&copy; Developed by Othmane Namani, 2020</footer>
      </div>
    );
  }
}

export default App;
