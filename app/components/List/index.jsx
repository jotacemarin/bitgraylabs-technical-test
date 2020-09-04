import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import SingleItem from 'components/SingleItem';

export const List = ({ elements }) => (
  <Fragment>
    {elements &&
      elements.map(item => (
        <SingleItem key={`${item.name}-${item.issue}`} {...item} />
      ))}
  </Fragment>
);

List.propTypes = {
  elements: PropTypes.array,
};

List.defaultProps = {
  elements: [],
};

export default List;
