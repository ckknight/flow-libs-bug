// @flow
import React, { Component } from 'react';

class App extends Component<{}> {
  componentDidMount() {
    this.props.nonexistent();
  }
  render() {
    return <div />;
  }
}

export default App;
