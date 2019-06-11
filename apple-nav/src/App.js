import React from 'react';
import './App.css';

import navData from './data';
import NavWrapper from './components/NavWrapper';

class App extends React.Component {
  state = {
    tabs: []
  }

  componentDidMount() {
    this.setState({tabs: navData})
  }

  render () {
    console.log(this.state.tabs)
    return (
      <div className="App">
        <NavWrapper tabs={this.state.tabs} />
      </div>
    );
  }
}

export default App;
