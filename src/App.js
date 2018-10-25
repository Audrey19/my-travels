// src/App.js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Travel</h1>
        </header>

        <Travel
          destination="Lisbonne"
          country="Portugal"
          photo="https://i.goopics.net/wL3O9.jpg"
          distance="1,585 km"
        />
        <Travel
          destination="Namur"
          country="belgium"
          photo="https://i.goopics.net/dkm1y.jpg"
          distance="69 km"
        />
      </div>
    );
  }
}

export default App;
