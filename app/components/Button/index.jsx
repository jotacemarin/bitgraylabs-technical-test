import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './styles.css';

export const Button = ({ onClick, label, selected, icon }) => (
  <button
    className={`${selected ? 'selected' : ''}`}
    type="button"
    onClick={onClick}
  >
    {icon && <span className="button-icon">{icon}</span>}
    <span className={`${icon ? 'button-label' : ''}`}>{label}</span>
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
};

Button.defaultProps = {
  selected: false,
  icon: false,
};

export default Button;
