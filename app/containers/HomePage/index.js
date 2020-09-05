import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { injectIntl } from 'react-intl';

import injectReducer from 'utils/redux/injectables/injectReducer';
import injectSaga from 'utils/redux/injectables/injectSaga';

import * as globalActions from 'containers/App/redux/actions';
import * as detailItemActions from 'containers/modals/DetailItem/redux/actions';
import * as actions from './redux/actions';
import reducer from './redux/reducer';
import saga from './redux/saga';

import HomePage from './view';

export const mapDispatchToProps = dispatch => ({
  globalActions: bindActionCreators(globalActions, dispatch),
  actions: bindActionCreators(actions, dispatch),
  detailItemActions: bindActionCreators(detailItemActions, dispatch),
});

const mapStateToProps = state => ({
  loading: state.global.get('loading'),
  gridView: state.homePage.get('gridView'),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homePage', reducer });

const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(injectIntl(HomePage));
