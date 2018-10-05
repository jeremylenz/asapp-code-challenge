import React, { Component } from 'react';
import { Input, Button } from 'semantic-ui-react'

class MessageInput extends Component {

  constructor () {
    super ()
    this.state = {
      value: '',
    }
  }

  handleInput = (e) => {
    this.setState({
      value: e.target.value,
    })
  }

  handleEnterKey = (e) => {
    if (e.keyCode == 13) {
      this.sendMessage(this.state.value, this.props.owner, this.props.sendsTo)
    }
  }

  sendMessage = (messageText, from, to) => {
    if (typeof this.props.sendMessage === 'function') {
      this.setState({
        value: '',
      })
      this.props.sendMessage(messageText, from, to)
    }
  }

  render() {
    const sendButton = (<Button onClick={() => this.sendMessage(this.state.value, this.props.owner, this.props.sendsTo)}>Send</Button>)

    return (
      <div className='message-input'>
        <Input action={sendButton} placeholder='' value={this.state.value} onChange={this.handleInput} onKeyUp={this.handleEnterKey} />
      </div>
    );
  }

}

export default MessageInput;
