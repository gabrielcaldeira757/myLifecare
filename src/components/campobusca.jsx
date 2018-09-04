import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

class CampoBusca extends Component {
  constructor(props) {
    super(props);
      this.state = {     
        inputplace: '',
      };
  }
   render() {
     
    const {inputplace} = this.state


      return (
        <div className="CampoBusca">
          <input 
            type='text' 
            value={this.state.inputplace}
            onChange={ value => { this.setState({ inputplace: value }) } }
          />
          <Button 
            bsStyle="primary"
            onClick={(e) => this.props.pegaCep( this.state.inputplace )} 
          />Busca Cep
        </div>
      );
  }
}

export default CampoBusca;
