import React, { Component } from 'react';
import './App.css';
import SnackList from './Components/SnackList/SnackList'
import SnackForm from './Components/SnackForm/SnackForm'

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <SnackForm />
        <SnackList />
      </div>
    );
  }
}

export default App;
