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

  fireMessage = (messageText, from, to) => {
    if (typeof this.props.fireMessage === 'function') {
      this.setState({
        value: '',
      })
      this.props.fireMessage(messageText, from, to)
    }
  }

  render() {
    console.log(this.props.fireMessage)
    return (
      <div className='message-input'>
        <Input placeholder='' value={this.state.value} onChange={this.handleInput}>
        </Input>
        <Button onClick={() => this.fireMessage(this.state.value, this.props.owner, this.props.sendsTo)} />
      </div>
    );
  }

}

export default MessageInput;
