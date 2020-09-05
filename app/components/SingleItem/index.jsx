// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';

// Styles
import './styles.css';

// Messages
import messages from './messages';

/**
 * @author Julio Marin
 * @file app\components\SingleItem\index.jsx
 * @description SingleItem component
 */
export const SingleItem = ({
  intl,
  image,
  date,
  name,
  issue,
  mode,
  url,
  onClick,
}) => (
  <div
    className={`single-item ${mode ? 'in-grid' : 'in-list'}`}
    onClick={() => onClick(url)}
    role="button"
    tabIndex={0}
    aria-hidden="true"
  >
    <div className="single-item-container-img">
      <img className="single-item-img" src={image} alt="list item" />
    </div>
    <p className="single-item-info">
      <span className="single-item-name">
        <strong>
          {`${name || intl.formatMessage(messages.withoutName)} ${issue}`}
        </strong>
      </span>
      <span className="single-item-date">{date}</span>
    </p>
  </div>
);

/**
 * Component properties
 */
SingleItem.propTypes = {
  intl: intlShape.isRequired,
  image: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  issue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mode: PropTypes.bool,
  url: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  onClick: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
};

/**
 * Default component properties
 */
SingleItem.defaultProps = {
  name: false,
  issue: false,
  mode: false,
  url: false,
  onClick: false,
};

export default injectIntl(SingleItem);
