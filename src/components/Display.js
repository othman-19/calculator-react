import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { result } = this.props;
    return (
      <div className="App">
        <p>
          Display component connected
        </p>
        <p>
          result is:
          {result}
        </p>
      </div>
    );
  }
}

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
