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

class AppContainer extends Component {

  constructor() {
    super()
    this.state = {
      messages: initialMessages,
      users: initialUsers,
    }
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
                <ChatHistory owner='Rob' messages={this.state.messages} typingAsOf={lauraTypingAsOf} />
                <MessageInput owner='Rob' />
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="right-chat">
                <ChatHistory owner='Laura' messages={this.state.messages} typingAsOf={robTypingAsOf} />
                <MessageInput owner='Laura' />
              </div>
            </Grid.Column>
        </Grid.Row>
        </Grid>
      </Fragment>
    );
  }

}

export default AppContainer;
