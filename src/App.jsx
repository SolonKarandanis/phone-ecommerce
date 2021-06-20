import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import Navbar from './components/Navbar.jsx';
import ProductList from './components/ProductList.jsx';
import Details from './components/Details.jsx';
import Cart from './components/Cart.jsx';
import PageNotFound from './components/PageNotFound.jsx';
import { Switch, Route } from 'react-router-dom';


class App extends Component{
  render(){
    return(
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route path="/products" exact component={ProductList}/>
          <Route path="/details" exact component={Details}/>
          <Route path="/cart" exact component={Cart}/>
          <Route  component={PageNotFound}/>
        </Switch>
      </React.Fragment>
    )
  }
};

export default App;
