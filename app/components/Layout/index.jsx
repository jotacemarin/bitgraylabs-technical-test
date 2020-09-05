// Dependencies
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Components
import Loading from 'components/Loading';
import Topbar from 'components/Topbar';
import CheckConn from 'components/CheckConn';

// Styles
import './styles.css';

/**
 * @author Julio Marin
 * @file app\components\Layout\index.jsx
 * @description Layout component
 */
export const Layout = ({ title, subtitle, children, loading, buttons }) => (
  <Fragment>
    <Topbar title={title} subtitle={subtitle} buttons={buttons} />
    {loading && <Loading />}
    <div className="main-container">{children}</div>
    <CheckConn />
  </Fragment>
);

/**
 * Component properties
 */
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  buttons: PropTypes.array,
};

/**
 * Default component properties
 */
Layout.defaultProps = {
  loading: false,
  buttons: [],
};

export default Layout;
