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
          photo="https://madeinmarseille.net/actualites-marseille/2016/10/tramway-lisbonne-tourisme-visite.jpg"
          distance="1,585 km"
        />
        <Travel
          destination="Namur"
          country="belgium"
          photo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/01-Namur-290305_%283%29_JPG.jpg/1200px-01-Namur-290305_%283%29_JPG.jpg"
          distance="69 km"
        />
      </div>
    );
  }
}

export default App;
