// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './styles.css';

/**
 * @author Julio Marin
 * @file app\components\Button\index.jsx
 * @description Button component
 */
export const Button = ({ onClick, label, selected, icon, full }) => {
  const selectedCN = selected ? 'selected' : '';
  const onlyIconCN = icon && !label ? 'only-icon' : '';
  const fullCN = full ? 'full' : '';
  const iconLabelCN = icon ? 'button-label' : '';
  return (
    <button
      className={`${selectedCN} ${onlyIconCN} ${fullCN}`}
      type="button"
      onClick={onClick}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {label && <span className={iconLabelCN}>{label}</span>}
    </button>
  );
};

/**
 * Component properties
 */
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  selected: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
  full: PropTypes.bool,
};

/**
 * Default component properties
 */
Button.defaultProps = {
  label: false,
  selected: false,
  icon: false,
  full: false,
};

export default Button;
