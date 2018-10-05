import React from 'react';
import { Label } from 'semantic-ui-react'

const Message = ({ whose, text, sentAt, messageId, from, to }) => {
  const msgPointing = whose === 'ours' ? 'left' : 'right'
  const msgColor = whose === 'ours' ? 'purple' : 'gray'

  return (
    <div className={`boxy-message ${whose}`}>
      <Label pointing={msgPointing} color={msgColor}>{text}</Label>
    </div>
  )
};

export default Message;
