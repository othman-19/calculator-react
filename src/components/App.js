import React from 'react';
import Display from './Display';
// import Button from './Button';
import ButtonPanel from './ButtonPanel';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            App component connected
          </p>
        </header>
        <Display result="string" />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
