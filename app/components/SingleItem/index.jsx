import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './styles.css';

export const SingleItem = ({ grid, image, date, name, issue }) => (
  <div className={`single-item${grid ? ' in-grid' : ' in-list'}`}>
    <img className="single-item-img" src={image} alt="list item" />
    <p className="single-item-info">
      <span className="single-item-name">
        <strong>{`${name} - ${issue}`}</strong>
      </span>
      <span className="single-item-date">{date}</span>
    </p>
  </div>
);

SingleItem.propTypes = {
  image: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  issue: PropTypes.number.isRequired,
  grid: PropTypes.bool,
};

SingleItem.defaultProps = {
  grid: false,
};

export default SingleItem;
