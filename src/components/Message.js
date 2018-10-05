import React from 'react';
import { Label } from 'semantic-ui-react'

const Message = (props) => {
  const { whose, message } = props
  const msgPointing = whose === 'ours' ? 'left' : 'right'
  const msgColor = whose === 'ours' ? 'purple' : null
  const text = props.message.text

  return (
    <div className={`boxy-message ${whose}`}>
      <Label pointing={msgPointing} color={msgColor}>{text}</Label>
    </div>
  )
};

export default Message;
