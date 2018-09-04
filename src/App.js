import React, { Component } from 'react';
import './App.css';
import Demo from "./content";


class App extends Component {

    state= {
        numberApp: 0,

    }

    ClickEvent123 = (number12345) => { //10
        this.setState({
            numberApp: number12345
        })
    }


  render() {
    return (
      <div className="App">
          <Demo




              prop1 = { 1}
              prop2 = { 2}
              abc = {'....'}
              ham = { this.ClickEvent123}
          />
          {
              this.state.numberApp
          }
          <div>dat ngu bo</div>
      </div>
    );
  }
}

export default App;
