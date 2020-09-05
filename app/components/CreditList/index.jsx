// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage } from 'react-intl';

// Utils
import { generateUUID } from 'commons/helper';

// Componentes
import CreditItem from 'components/CreditItem';

// Styles
import './styles.css';

/**
 * @author Julio Marin
 * @file app\components\CreditList\index.jsx
 * @description CreditList component
 */
export const CreditList = ({ title, items, image }) =>
  items.length ? (
    <div className="credit-list">
      <strong className="credit-list-title">
        <FormattedMessage {...title} />
      </strong>
      <div className="credit-list-container">
        {items.map(item => (
          <CreditItem key={`${generateUUID()}`} {...item} image={image} />
        ))}
      </div>
    </div>
  ) : null;

/**
 * Component properties
 */
CreditList.propTypes = {
  title: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  items: PropTypes.array,
  image: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

/**
 * Default component properties
 */
CreditList.defaultProps = {
  items: [],
  image: false,
};

export default injectIntl(CreditList);
