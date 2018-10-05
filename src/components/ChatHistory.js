import React, { Component } from 'react';
import Message from './Message'
import TypingIndicator from './TypingIndicator'

class ChatHistory extends Component {

  render() {
    const { messages, owner, refreshTypingIndicator } = this.props
    const mostRecentMessage = messages[messages.length - 1].sentAt
    const typingAsOf = this.props.typingAsOf || 0
    // The typing indicator should show if the user pressed a key in the last 3 seconds, but suppressed if a message has been sent in the last 2 seconds
    const displayTypingIndicator = (((Date.now() - typingAsOf) < 3000) && (Date.now() - mostRecentMessage) > 2000)

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
