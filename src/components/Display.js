import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  result
    ? (
      <div className="Display">
        <p className="result">
          {result}
        </p>
      </div>
    )
    : (
      <div className="Display">
        <p className="result">
          0
        </p>
      </div>
    )
);

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
