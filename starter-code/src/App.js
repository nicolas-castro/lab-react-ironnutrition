import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import Foodbox from './FoodBox'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Foodbox />  
      </div>
    );
  }
}

export default App;
