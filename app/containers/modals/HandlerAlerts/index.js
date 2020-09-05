import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { injectIntl } from 'react-intl';

import * as globalActions from 'containers/App/redux/actions';

import injectReducer from 'utils/redux/injectables/injectReducer';
import injectSaga from 'utils/redux/injectables/injectSaga';
import reducer from './redux/reducer';

import HandlerAlerts from './view';

export const mapDispatchToProps = dispatch => ({
  globalActions: bindActionCreators(globalActions, dispatch),
});

const mapStateToProps = state => ({
  loading: state.global.get('loading'),
  response: state.global.get('response').toJS(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'handlerAlert', reducer });

export default compose(
  withReducer,
  withConnect,
)(injectIntl(HandlerAlerts));
