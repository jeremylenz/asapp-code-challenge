import React, { Component } from 'react';
import { Input } from 'semantic-ui-react'

class MessageInput extends Component {

  render() {
    return (
      <div className='message-input'>
        <Input action='Send' placeholder='' />
      </div>
    );
  }

}

export default MessageInput;
