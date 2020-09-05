// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { AiFillCloseCircle } from 'react-icons/ai';

// Components
import Button from 'components/Button';

// Styles
import './styles.css';

/**
 * @author Julio Marin
 * @file app\components\Modal\index.jsx
 * @description Modal component
 */
export const Modal = ({ show, title, children, close }) =>
  !show ? null : (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-header-title">
          {title && <strong>{title}</strong>}
          <Button
            onClick={close}
            icon={<AiFillCloseCircle onClick={close} color="red" size={24} />}
          />
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );

/**
 * Component properties
 */
Modal.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  children: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
};

/**
 * Default component properties
 */
Modal.defaultProps = {
  show: false,
  title: false,
};

export default Modal;
