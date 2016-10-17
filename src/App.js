import React, { Component } from 'react';
import Form from "./Form";
import './App.css';
import 'netlify-styleguide/dist/css/main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Open Sauced</h1>
        </div>
        <Form />
      </div>
    );
  }
}

export default App;
