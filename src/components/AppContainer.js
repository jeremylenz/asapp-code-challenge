import React, { Component, Fragment } from 'react';
import { Grid, Header } from 'semantic-ui-react'
import ChatHistory from './ChatHistory'
import MessageInput from './MessageInput'

const initialUsers = [
  {
    name: 'Rob',
    id: '1',
    typingAsOf: null,
  },
  {
    name: 'Laura',
    id: '2',
    typingAsOf: null,
  }
]

const initialMessages = [
  {
    from: 'Rob',
    to: 'Laura',
    id: 0,
    sentAt: 1538760702611,
    text: "Hiii",
  },
  {
    from: 'Laura',
    to: 'Rob',
    id: 1,
    sentAt: 1538760702615,
    text: "Hey what's up!",
  },
]

var getNextId = function () {
  let id = 2
  return function () {
    id += 1
    return id;
  }
}();

class AppContainer extends Component {

  constructor() {
    super()
    this.state = {
      messages: initialMessages,
      users: initialUsers,
    }
  }

  sendMessage = (messageText, from, to) => {
    console.log(messageText)
    const newId = getNextId()
    const newMessage = {
      from: from,
      to: to,
      id: newId,
      sentAt: Date.now(),
      text: messageText,
    }
    this.setState((state, props) => {
      return {
        messages: [...state.messages, newMessage]
      }
    })
  }

  render() {
    const laura = this.state.users.find((user) => user.name === 'Laura')
    const rob = this.state.users.find((user) => user.name === 'Rob')
    const lauraTypingAsOf = laura.typingAsOf
    const robTypingAsOf = rob.typingAsOf

    return (
      <Fragment>
        <Header as='h1'>Rob and Laura's BoxyChat</Header>
        <Grid columns={2} celled>
          <Grid.Row>
            <Grid.Column>
              <div className="left-chat">
                <ChatHistory owner='Rob' sendsTo='Laura' messages={this.state.messages} typingAsOf={lauraTypingAsOf} />
                <MessageInput owner='Rob' sendsTo='Laura' />
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="right-chat">
                <ChatHistory owner='Laura' sendsTo='Rob' messages={this.state.messages} typingAsOf={robTypingAsOf} />
                <MessageInput owner='Laura' foo='bar' sendsTo='Rob' fireMessage={this.sendMessage} />
              </div>
            </Grid.Column>
        </Grid.Row>
        </Grid>
      </Fragment>
    );
  }

}

export default AppContainer;
