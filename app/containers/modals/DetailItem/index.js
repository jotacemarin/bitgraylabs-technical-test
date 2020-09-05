import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { injectIntl } from 'react-intl';

import injectReducer from 'utils/redux/injectables/injectReducer';
import injectSaga from 'utils/redux/injectables/injectSaga';

import * as globalActions from 'containers/App/redux/actions';
import * as actions from './redux/actions';
import reducer from './redux/reducer';
import saga from './redux/saga';

import DetailItem from './view';

export const mapDispatchToProps = dispatch => ({
  globalActions: bindActionCreators(globalActions, dispatch),
  actions: bindActionCreators(actions, dispatch),
});

const mapStateToProps = state => ({
  loading: state.global.get('loading'),
  showModal: state.detailItem.get('showModal'),
  url: state.detailItem.get('url'),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'detailItem', reducer });

const withSaga = injectSaga({ key: 'detailItem', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(injectIntl(DetailItem));
