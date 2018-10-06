import React, { Component } from 'react';
import Message from './Message'
import TypingIndicator from './TypingIndicator'
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class ChatHistory extends Component {

  constructor() {
    super()
  }

  scrollToBottom = () => {
    scroller.scrollTo('lastMessage', {
    duration: 200,
    delay: 0,
    smooth: true,
    containerId: `${this.props.owner}-chat-history`,
    })
  }

  componentDidUpdate = () => {

  }

  render() {
    const { messages, owner } = this.props
    const containerId = `${owner}-chat-history`
    const mostRecentMessage = messages[messages.length - 1].sentAt
    const typingAsOf = this.props.typingAsOf || 0
    // The typing indicator should show if the user pressed a key in the last 3 seconds, but suppressed if a message has been sent in the last 2 seconds
    const displayTypingIndicator = (((Date.now() - typingAsOf) < 3000) && (Date.now() - mostRecentMessage) > 3000)

    console.log('scrollToBottom')
    this.scrollToBottom()
    
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
        <Element name="lastMessage">
          <Message key={'hi'} message={{text: 'lastMessage'}} whose='ours' />
        </Element>
      </div>
    );
  }

}

ChatHistory.defaultProps = {
  messages: []
}

export default ChatHistory;
