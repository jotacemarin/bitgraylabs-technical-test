import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Components
import Loading from 'components/Loading';
import Topbar from 'components/Topbar';

// Styles
import './styles.css';

export const Layout = ({ title, subtitle, children, loading, buttons }) => (
  <Fragment>
    <Topbar title={title} subtitle={subtitle} buttons={buttons} />
    {loading && <Loading />}
    <div className="main-container">{children}</div>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  buttons: PropTypes.array,
};

Layout.defaultProps = {
  loading: false,
  buttons: [],
};

export default Layout;
