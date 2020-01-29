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
      <button type="submit">
        { buttonName }
      </button>
    );
  }
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default Button;
