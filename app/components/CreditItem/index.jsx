// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './styles.css';

/**
 * @author Julio Marin
 * @file app\components\CreditItem\index.jsx
 * @description CreditItem component
 */
export const CreditItem = ({ image, name, site_detail_url: href }) => (
  <div className="credit-item">
    <div className="credit-item-container-img">
      <img className="credit-item-img" src={image} alt="miniature pic" />
    </div>
    <a className="credit-item-name" href={href} target="_blank">
      {name}
    </a>
  </div>
);

/**
 * Component properties
 */
CreditItem.propTypes = {
  image: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  name: PropTypes.string.isRequired,
  site_detail_url: PropTypes.string.isRequired,
};

/**
 * Default component properties
 */
CreditItem.defaultProps = {
  image: false,
};

export default CreditItem;
