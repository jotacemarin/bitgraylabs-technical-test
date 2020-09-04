import React, { Component } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import PropTypes from 'prop-types';
import { FaList } from 'react-icons/fa';
import { BsFillGrid3X2GapFill } from 'react-icons/bs';

// Components
import Layout from 'components/Layout';
import List from 'components/List';

// Messages
import messages from './messages';

export class HomePage extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const {
      intl: { formatMessage },
      loading,
    } = this.props;
    const buttons = [
      { onClick: () => true, label: 'dummy 1', icon: <FaList /> },
      { onClick: () => true, label: 'dummy 2', icon: <BsFillGrid3X2GapFill /> },
    ];
    const elements = [
      {
        image:
          'https://comicvine1.cbsistatic.com/uploads/original/5/58993/2645776-chamber_of_chills__13_cgc_8.5.jpg',
        date: '2008-06-06 11:10:16',
        name: 'The Lost Race',
        issue: 13,
      },
      {
        image:
          'https://comicvine1.cbsistatic.com/uploads/original/5/58993/2645776-chamber_of_chills__13_cgc_8.5.jpg',
        date: '2008-06-06 11:10:16',
        name:
          'The Lost Race the lost race the lost race the lost race the lost race ',
        issue: 14,
      },
    ];
    return (
      <Layout
        loading={loading}
        title={formatMessage(messages.titleHeader)}
        subtitle={formatMessage(messages.subtitleHeader)}
        buttons={buttons}
      >
        <List elements={elements} />
      </Layout>
    );
  }
}

HomePage.propTypes = {
  intl: intlShape.isRequired,
  loading: PropTypes.bool,
};

export default injectIntl(HomePage);
