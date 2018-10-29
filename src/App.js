// src/App.js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travels from "./Travels";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Travels</h1>
        </header>

        <Travels
          destination="Lisbonne"
          country="Portugal"
          distance="1,585 km"
          image="https://madeinmarseille.net/actualites-marseille/2016/10/tramway-lisbonne-tourisme-visite.jpg"
        />
      </div>
    );
  }
}

export default App;
