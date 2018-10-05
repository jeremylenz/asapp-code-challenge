import React, { Component, Fragment } from 'react';
import ChatHistory from './ChatHistory'
import MessageInput from './MessageInput'

class ChatWindow extends Component {

  render() {
    return (
      <Fragment>
        <ChatHistory />
        <MessageInput />
      </Fragment>
    );
  }

}

export default ChatWindow;
