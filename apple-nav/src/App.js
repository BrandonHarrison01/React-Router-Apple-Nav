import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import products from './data';
import NavWrapper from './components/NavWrapper';
import ProductPage from './components/ProductPage';

class App extends React.Component {
  state = {
    products: products
  }

  render () {
    console.log(this.state.tabs)
    return (
      <div className="App">
        <NavWrapper />
        <Route path='/:id' render={(props) => <ProductPage {...props} products={this.state.products} />}/>
      </div>
    );
  }
}

export default App;
