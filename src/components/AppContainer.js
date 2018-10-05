import React, { Component, Fragment } from 'react';
import { Grid, Header } from 'semantic-ui-react'

class AppContainer extends Component {

  render() {
    return (
      <Fragment>
        <Header as='h1'>Rob and Laura's BoxyChat</Header>
        <Grid columns={2} celled>
          <Grid.Row>
            <Grid.Column>
              <div className="left-chat">ChatWindow A</div>
            </Grid.Column>
            <Grid.Column>
              <div className="right-chat">ChatWindow B</div>
            </Grid.Column>
        </Grid.Row>
        </Grid>
      </Fragment>
    );
  }

}

export default AppContainer;
