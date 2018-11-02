import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';




class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Shelfie</h1>
        </div>
      
        <div className="input-div" >
          <Dashboard/>
        </div>
      </div>
      
    );
  }
}

export default App;
