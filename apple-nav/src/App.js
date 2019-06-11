import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import navData from './data';
import NavWrapper from './components/NavWrapper';
import ProductPage from './components/ProductPage';

class App extends React.Component {
  state = {
    tabs: navData
  }

  render () {
    console.log(this.state.tabs)
    return (
      <div className="App">
        <NavWrapper />
        <Route path='/:tabs' component={ProductPage}/>
      </div>
    );
  }
}

export default App;
