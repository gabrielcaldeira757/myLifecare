import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Geocode from "react-geocode";

class MapaGoogle extends Component {
    constructor(props) {
        super(props);
        this.state = {     
            showingInfoWindow: false,
            activeMarker: {},
            inputplace: ''
        };
      }

      getLatlong(){
        Geocode.fromAddress("30150250").then(
            response => {
              const { lat, lng } = response.results[0].geometry.location;
              
              
              console.log(lat, lng);
            },
            error => {
              console.error(error);
            }
          );
     }

     getEndereco(){
      Geocode.fromLatLng("48.8583701", "2.2922926").then(
        response => {
          const address = response.results[0].formatted_address;
          console.log(address);
        },
        error => {
          console.error(error);
        }
      );

     }
  
    render() {

    return (
      <Map google={this.props.google} zoom={14}>

        <Marker onClick={this.onMarkerClick}
          name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.inputplace}</h1>
          </div> 
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyD7BZdVGsoJ89nQNQkF_HD9KIwAtPPuGQE' )
  })(MapaGoogle)
