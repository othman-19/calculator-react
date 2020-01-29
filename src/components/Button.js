import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { buttonName } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Display component connected
          </p>
        </header>
        <p>
          result is:
          { buttonName}
        </p>
      </div>
    );
  }
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default Button;
