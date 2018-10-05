import React, { Component } from 'react';
import Message from './Message'
import TypingIndicator from './TypingIndicator'

class ChatHistory extends Component {

  render() {
    return (
      <div className="chat-history">
        <Message whose='ours' text='Hiii'/>
        <Message whose='theirs' text="Hey what's up!"/>
        <TypingIndicator />
      </div>
    );
  }

}

export default ChatHistory;
