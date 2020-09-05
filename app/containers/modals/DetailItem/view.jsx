import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { intlShape } from 'react-intl';

// Components
import Modal from 'components/Modal';
import CreditList from 'components/CreditList';

// Messages
import messages from './messages';

// Styles
import './styles.css';

export class DetailItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image: false,
      characterCredits: [],
      teamCredits: [],
      locationCredits: [],
    };
  }

  componentDidUpdate(prevProp) {
    const { url } = this.props;
    if (url && url !== prevProp.url) {
      this.getIssue();
    }
  }

  render() {
    const {
      loading,
      showModal,
      intl: { formatMessage },
    } = this.props;
    const {
      name,
      image,
      teamCredits,
      locationCredits,
      characterCredits,
    } = this.state;

    if (loading) {
      return null;
    }

    return (
      <Modal
        show={showModal}
        title={name || formatMessage(messages.withoutName)}
        close={this.close}
      >
        <div className="detail-item-container">
          <div className="detail-item-container-lists">
            <CreditList
              title={messages.teams}
              items={characterCredits}
              image={image}
            />
            <CreditList
              title={messages.teams}
              items={teamCredits}
              image={image}
            />
            <CreditList
              title={messages.locations}
              items={locationCredits}
              image={image}
            />
          </div>
          <div className="detail-item-container-img">
            {image && (
              <img
                className="detail-item-img"
                src={image}
                alt="book portrait detail"
              />
            )}
          </div>
        </div>
      </Modal>
    );
  }

  close = () => this.props.actions.displayModal(false, false);

  getIssue = () => {
    const { url } = this.props;
    if (!url) {
      return;
    }

    const {
      globalActions: { setLoading },
      actions: { getIssue },
    } = this.props;
    setLoading(true);
    getIssue(url, this.getSuccessIssue);
  };

  getSuccessIssue = response => {
    const {
      results: {
        name,
        team_credits: teamCredits,
        image: { original_url: image },
        location_credits: locationCredits,
        character_credits: characterCredits,
      },
    } = response;
    this.setState({
      name,
      image,
      teamCredits,
      locationCredits,
      characterCredits,
    });
  };
}

DetailItem.propTypes = {
  intl: intlShape.isRequired,
  globalActions: PropTypes.object,
  actions: PropTypes.object,
  showModal: PropTypes.bool,
  url: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  loading: PropTypes.bool,
};

export default DetailItem;
