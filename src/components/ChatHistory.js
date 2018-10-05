import React, { Component } from 'react';
import Message from './Message'
import TypingIndicator from './TypingIndicator'

const messages = [
  {
    whose: 'ours',
    text: "Hey what's up",
    sentAt: Date.now(),

  }
]

class ChatHistory extends Component {

  render() {
    return (
      <div>
        <Message />
        <Message />
        <TypingIndicator />
      </div>
    );
  }

}

export default ChatHistory;
