// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { intlShape } from 'react-intl';

// Components
import Modal from 'components/Modal';

// Messages
import messages from './messages';

// Styles
import './styles.css';

export const HandlerAlerts = props => {
  const {
    globalActions: { resetResponse },
    intl: { formatMessage },
    response: { type },
    loading,
  } = props;

  if (loading) {
    return null;
  }

  const close = () => resetResponse();

  return (
    <Modal
      show={type === 'error'}
      title={formatMessage(messages.erorrConn)}
      close={close}
    >
      <p className="handler-alerts-text">
        {formatMessage(messages.erorrConnDescription)}
        <pre>
          <code>npm run proxy</code>
        </pre>
      </p>
    </Modal>
  );
};

/**
 * Component properties
 */
HandlerAlerts.propTypes = {
  intl: intlShape.isRequired,
  globalActions: PropTypes.object,
  loading: PropTypes.bool,
  response: PropTypes.object,
};

export default HandlerAlerts;
