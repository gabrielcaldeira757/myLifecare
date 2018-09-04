import React, { Component } from 'react';
import './App.css';
import MapaGoogle from './components/maps'
import CampoBusca from './components/campobusca'


class App extends Component {
  constructor(props) {
    super(props);

    this.getCep = this.getCep.bind(this)

    this.state = {     
      inputplace: '',
    };
  }      
  
  
  getCep(inputplace){
    this.setState({ inputplace })
  };

  render() {
    console.log(this.state.inputplace)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Buscador de CEP</h1>
          <CampoBusca pegaCep={(inputplace) => this.getCep()} />
        </header>

              <MapaGoogle  />
           

      </div>
    );
  }
}

export default App;
