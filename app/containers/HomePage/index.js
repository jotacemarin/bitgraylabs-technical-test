import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { injectIntl } from 'react-intl';

// import injectSaga from 'utils/redux/injectables/injectSaga';

import * as globalActions from 'containers/App/redux/actions';

import HomePage from './view';

export const mapDispatchToProps = dispatch => ({
  globalActions: bindActionCreators(globalActions, dispatch),
});

const mapStateToProps = state => ({
  loading: state.global.get('loading'),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(injectIntl(HomePage));
