// Dependencies
import React, { useState } from 'react';
import { injectIntl, intlShape } from 'react-intl';

// Components
import Modal from 'components/Modal';

// Assets
import dinoConn from 'images/dino-no-conn.png';

// Messages
import messages from './messages';

// Styles
import './styles.css';

export const CheckConn = ({ intl }) => {
  const [alive, setAlive] = useState(true);

  window.addEventListener('offline', () => {
    setAlive(false);
  });

  window.addEventListener('online', () => {
    setAlive(true);
  });

  const noConnMessge = intl.formatMessage(messages.withoutConn);

  return (
    <Modal show={!alive} title={noConnMessge} close={() => true}>
      <img className="dino-conn" src={dinoConn} alt={noConnMessge} />
    </Modal>
  );
};

/**
 * Component properties
 */
CheckConn.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(CheckConn);
