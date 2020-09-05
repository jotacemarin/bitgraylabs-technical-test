// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Button from 'components/Button';

// Styles
import './styles.css';

/**
 * @author Julio Marin
 * @file app\components\Topbar\index.jsx
 * @description SingleItem component
 */
export const Topbar = ({ title, subtitle, buttons }) => (
  <header>
    <h1 className="topbar-title">{title}</h1>
    <div className="second-row">
      <span className="topbar-subtitle">{subtitle}</span>
      <div className="topbar-buttons-containers">
        {buttons.map(item => (
          <Button key={`button-${item.label}`} {...item} />
        ))}
      </div>
    </div>
  </header>
);

/**
 * Component properties
 */
Topbar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  buttons: PropTypes.array,
};

/**
 * Default component properties
 */
Topbar.defaultProps = {
  buttons: [],
};

export default Topbar;
