import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import { FaList } from 'react-icons/fa';
import { BsFillGrid3X2GapFill } from 'react-icons/bs';

// Components
import Layout from 'components/Layout';
import GridList from 'components/GridList';
import DetailItem from 'containers/modals/DetailItem';

// Messages
import messages from './messages';

// Local Helpers
import { parseElements } from './helpers';

export class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offset: 0,
      results: [],
    };
  }

  componentDidMount() {
    this.getIssues();
  }

  render() {
    const {
      intl: { formatMessage },
      loading,
      gridView,
    } = this.props;
    const { results } = this.state;
    const buttons = [
      {
        onClick: () => this.changeView(false),
        label: formatMessage(messages.buttonList),
        icon: <FaList />,
      },
      {
        onClick: () => this.changeView(true),
        label: formatMessage(messages.buttonGrid),
        icon: <BsFillGrid3X2GapFill />,
      },
    ];
    return (
      <Layout
        loading={loading}
        title={formatMessage(messages.titleHeader)}
        subtitle={formatMessage(messages.subtitleHeader)}
        buttons={buttons}
      >
        <GridList
          elements={parseElements(results)}
          mode={gridView}
          onClick={this.getIssue}
          getMore={this.getIssues}
        />
        <DetailItem />
      </Layout>
    );
  }

  changeView = isGrid => {
    const {
      actions: { toggleView },
    } = this.props;
    toggleView(isGrid);
  };

  getIssues = () => {
    const {
      globalActions: { setLoading },
      actions: { getIssues },
    } = this.props;
    const { offset } = this.state;
    setLoading(true);
    getIssues(9, offset, this.getSuccessIssues);
  };

  getIssue = url => {
    if (!url) {
      return;
    }

    const {
      detailItemActions: { displayModal },
    } = this.props;
    displayModal(true, url);
  };

  getSuccessIssues = response => {
    const { results: previusResults } = this.state;
    const { results } = response;
    const nextOffset = results[results.length - 1].id;
    this.setState({
      offset: nextOffset,
      results: previusResults.concat(results),
    });
  };
}

HomePage.propTypes = {
  intl: intlShape.isRequired,
  globalActions: PropTypes.object,
  detailItemActions: PropTypes.object,
  actions: PropTypes.object,
  loading: PropTypes.bool,
  gridView: PropTypes.bool,
};

export default injectIntl(HomePage);
