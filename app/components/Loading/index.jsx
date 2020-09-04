import React from 'react';
import PropTypes from 'prop-types';
import { DotLoader } from 'react-spinners';

// Styles
import './styles.css';

export const Loading = ({ size }) => (
  <div className="loader">
    <DotLoader size={size} sizeUnit="px" />
  </div>
);

Loading.propTypes = {
  size: PropTypes.number,
};

Loading.defaultProps = {
  size: 80,
};

export default Loading;
