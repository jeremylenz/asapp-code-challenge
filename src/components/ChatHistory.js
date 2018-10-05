import React, { Component } from 'react';
import Message from './Message'
import TypingIndicator from './TypingIndicator'

class ChatHistory extends Component {

  render() {
    const typingAsOf = this.props.typingAsOf || 0
    const displayTypingIndicator = ((Date.now() - typingAsOf) < 5000)
    const { messages, owner } = this.props

    return (
      <div className="chat-history">
        {messages.map((message) =>
        <Message
          key={message.id}
          message={message}
          whose={owner === message.from ? 'ours' : 'theirs'}
        />
        )}
        {displayTypingIndicator &&
          <TypingIndicator />
        }
      </div>
    );
  }

}

ChatHistory.defaultProps = {
  messages: []
}

export default ChatHistory;
