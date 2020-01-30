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
      <div className="App">
        <Display result="string" />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
