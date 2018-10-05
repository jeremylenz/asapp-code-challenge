import React, { Component } from 'react';
import Message from './Message'
import TypingIndicator from './TypingIndicator'

class ChatHistory extends Component {

  constructor() {
    super()
    this.myRef = React.createRef();
  }

  scrollToBottom = () => {
    var chatHistory = this.myRef.current
    if(chatHistory) {
      let newScrollVal = chatHistory.scrollHeight - chatHistory.clientHeight
      chatHistory.scrollTop = newScrollVal
    }
  }

  render() {
    const { messages, owner } = this.props
    const mostRecentMessage = messages[messages.length - 1].sentAt
    const typingAsOf = this.props.typingAsOf || 0
    // The typing indicator should show if the user pressed a key in the last 3 seconds, but suppressed if a message has been sent in the last 2 seconds
    const displayTypingIndicator = (((Date.now() - typingAsOf) < 3000) && (Date.now() - mostRecentMessage) > 3000)
    this.scrollToBottom();

    return (
      <div className="chat-history" ref={this.myRef}>
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
