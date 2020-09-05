// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { AiFillDownCircle } from 'react-icons/ai';

// Utils
import { generateUUID } from 'commons/helper';

// Components
import SingleItem from 'components/SingleItem';
import Button from 'components/Button';

// Styles
import './styles.css';

/**
 * @author Julio Marin
 * @file app\components\GridList\index.jsx
 * @description GridList component
 */
export const List = ({ elements, mode, onClick, getMore }) => (
  <>
    <div className={`list-component ${mode ? 'in-grid' : 'in-list'}`}>
      {elements &&
        elements.map(item => (
          <SingleItem
            key={`${generateUUID()}`}
            mode={mode}
            onClick={onClick}
            {...item}
          />
        ))}
    </div>
    {elements.length ? (
      <Button
        onClick={getMore}
        label="Load more"
        icon={<AiFillDownCircle />}
        full
      />
    ) : null}
  </>
);

/**
 * Component properties
 */
List.propTypes = {
  elements: PropTypes.array,
  mode: PropTypes.bool,
  onClick: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  getMore: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
};

/**
 * Default component properties
 */
List.defaultProps = {
  elements: [],
  mode: false,
  onClick: false,
  getMore: false,
};

export default List;
