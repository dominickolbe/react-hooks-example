import React, { Component } from 'react';
import './App.css';
import Todolist from './components/Todolist';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Todolist:</h1>
            <Todolist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
