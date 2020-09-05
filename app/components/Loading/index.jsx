// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { DotLoader } from 'react-spinners';

// Styles
import './styles.css';

/**
 * @author Julio Marin
 * @file app\components\Loading\index.jsx
 * @description SingleItem component
 */
export const Loading = ({ size }) => (
  <div className="loader">
    <DotLoader size={size} sizeUnit="px" />
  </div>
);

/**
 * Component properties
 */
Loading.propTypes = {
  size: PropTypes.number,
};

/**
 * Default component properties
 */
Loading.defaultProps = {
  size: 80,
};

export default Loading;
