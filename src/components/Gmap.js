import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const coords = {
  lat: 19.452390,
  lng: -99.145740
};

const params = {v: '3.exp', key: 'AIzaSyDeUY4gzlFSwqiLXOjBqkGZbOaBzwTVn7E'};

class MyGoogleMap extends React.Component {

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }

  render() {
    return (
      <Gmaps
        width={'600px'}
        height={'600px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={15}
        loadingMessage={'Loading M74 neighborhood...'}
        params={params}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={false}
          onClick={this.onClick} />
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'<strong>M74 base</strong> <p>We are here.</p>'}
          onCloseClick={this.onCloseClick} />
      </Gmaps>
    );
  }

}

export default MyGoogleMap