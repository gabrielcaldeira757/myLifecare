import React, { Component } from 'react';
import './App.css';
import Endereco from './components/endereco'
import MapaGoogle from './components/maps'
import CampoBusca from './components/campobusca'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {     
      inputplace: {},
    };
  }      
  
  
  getCep(value){
    this.setState({ inputplace: value })
  };

  render() {
    console.log(this.state.inputplace)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Buscador de CEP</h1>
          <CampoBusca pegaCep={this.getCep} />
        </header>

              <MapaGoogle input={this.state.inputplace} />
           
              <Endereco />

      </div>
    );
  }
}

export default App;
