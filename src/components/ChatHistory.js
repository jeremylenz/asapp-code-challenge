import React, { Component } from 'react';
import Message from './Message'
import TypingIndicator from './TypingIndicator'
import { animateScroll as scroll } from 'react-scroll'

class ChatHistory extends Component {

  componentDidUpdate = (prevProps) => {
    const prevMessageCount = prevProps.messages.length
    let newMessageCount = this.props.messages.length
    if(this.shouldTypingIndicatorDisplay(Date.now())) {
      newMessageCount++
    }

    if(newMessageCount > prevMessageCount) {
      this.scrollToBottom()
    }
  }

  shouldTypingIndicatorDisplay = (currentTime) => {
    const { messages } = this.props
    const typingAsOf = this.props.typingAsOf || 0
    const lastKeystrokeAge = currentTime - typingAsOf

    const mostRecentMessage = messages[messages.length - 1].sentAt
    const mostRecentMessageAge = currentTime - mostRecentMessage

    // The typing indicator should show if the user pressed a key in the last 3 seconds,
    // but it should be suppressed if a message has been sent in the last 3 seconds.
    return (lastKeystrokeAge < 3000 && mostRecentMessageAge > 3000)
  }

  scrollToBottom = () => {
    scroll.scrollToBottom({
    duration: 500,
    delay: 0,
    smooth: true,
    containerId: `${this.props.owner}-chat-history`,
    })
  }


  render() {
    const { messages, owner } = this.props
    const containerId = `${owner}-chat-history`
    const displayTypingIndicator = this.shouldTypingIndicatorDisplay(Date.now())

    return (
      <div className="chat-history" id={containerId}>
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
