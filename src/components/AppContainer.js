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
  let id = 1
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
      refreshTypingIndicator: Date.now(),
    }
  }

  sendMessage = (messageText, from, to) => {
    const sentAt = Date.now()
    const newId = getNextId()
    const newMessage = {
      from: from,
      to: to,
      id: newId,
      sentAt: sentAt,
      text: messageText,
    }
    this.setState((state, props) => {
      return {
        messages: [...state.messages, newMessage]
      }
    })
  }

  updateTypingIndicator = (owner, timestamp) => {
    this.setState((state, props) => {
      const user = state.users.find((user) => user.name === owner)
      const updatedUser = Object.assign(user, {typingAsOf: timestamp})
      const otherUsers = state.users.filter((user) => user.name !== owner)
      setTimeout(() => {
        this.setState({refreshTypingIndicator: Date.now()})
      }, 3000)
      return {
        users: [...otherUsers, updatedUser]
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
              <div className="chat-window">
                <ChatHistory owner='Laura' sendsTo='Rob' messages={this.state.messages} typingAsOf={robTypingAsOf} refreshTypingIndicator={this.state.refreshTypingIndicator} />
                <MessageInput owner='Laura' foo='bar' sendsTo='Rob' sendMessage={this.sendMessage} updateTypingIndicator={this.updateTypingIndicator} />
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="chat-window">
                <ChatHistory owner='Rob' sendsTo='Laura' messages={this.state.messages} typingAsOf={lauraTypingAsOf} refreshTypingIndicator={this.state.refreshTypingIndicator} />
                <MessageInput owner='Rob' sendsTo='Laura' sendMessage={this.sendMessage} updateTypingIndicator={this.updateTypingIndicator} />
              </div>
            </Grid.Column>
        </Grid.Row>
        </Grid>
      </Fragment>
    );
  }

}

export default AppContainer;
