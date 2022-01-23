import React, { Component } from 'react';
import HeaderFeedback from '../components/feedBack/HeaderFeedback';
import MessageFeedback from '../components/feedBack/MessageFeedback';
import ButtonsFeedback from '../components/feedBack/ButtonsFeedback';

class Feedback extends Component {
  render() {
    return (
      <div>
        <HeaderFeedback />
        <MessageFeedback />
        <ButtonsFeedback />
      </div>
    );
  }
}

export default Feedback;
