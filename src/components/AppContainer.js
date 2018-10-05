import React, { Component, Fragment } from 'react';
import { Divider } from 'semantic-ui-react'

class AppContainer extends Component {

  render() {
    return (
      <Fragment>
        <div>ChatWindow A</div>
        <Divider vertical />
        <div>ChatWindow B</div>
      </Fragment>
    );
  }

}

export default AppContainer;
