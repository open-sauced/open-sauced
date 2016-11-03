import React, { Component } from 'react';
import Form from "./Form";
import Manager from "./Manager";
import './App.css';
import 'netlify-styleguide/src/css/main.css';
import firebase from "./lib/firebase"

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
        // <Manager data={repoData} />

export default App;
