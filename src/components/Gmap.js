import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const coords = {
  lat: 19.4433396,
  lng: -99.1445044
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
            
        <Marker
            lat="19.441998"
            lng="-99.1589111"
            draggable={false}
            onClick={this.onClick} />
        <InfoWindow
            lat="19.441998"
            lng="-99.1589111"
            content={'<a rel="noopener noreferrer" href="http://www.chopo.unam.mx/" target="_blank"><strong>Museo del Chopo</strong></a>'}
            onCloseClick={this.onCloseClick} />
            
        <Marker
            lat="19.446712"
            lng="-99.1530116"
            draggable={false}
            onClick={this.onClick} />
        <InfoWindow
            lat="19.446712"
            lng="-99.1530116"
          content={'<a rel="noopener noreferrer" href="https://www.bibliotecavasconcelos.gob.mx/" target="_blank"><strong>Biblioteca Vasconcelos</strong></a>'}
          onCloseClick={this.onCloseClick} />
    
        <Marker
            lat="19.4361518"
            lng="-99.1491577"
            draggable={false}
            onClick={this.onClick} />
        <InfoWindow
            lat="19.4361518"
            lng="-99.1491577"
            content={'<a rel="noopener noreferrer"  href="https://museomuraldiegorivera.bellasartes.gob.mx/" target="_blank"><strong>Museo Diego Rivera</strong></a>'}
            onCloseClick={this.onCloseClick} />
    
        <Marker
            lat="19.4363929"
            lng="-99.1439954"
            draggable={false}
            onClick={this.onClick} />
            <InfoWindow
            lat="19.4363929"
            lng="-99.1439954"
                content={'<a rel="noopener noreferrer" href="https://palacio.inba.gob.mx/" target="_blank"><strong>Bellas Artes</strong></a>'}
                onCloseClick={this.onCloseClick} />
    
    <Marker
            lat="19.4424737"
            lng="-99.1415707"
            draggable={false}
            onClick={this.onClick} />
            <InfoWindow
            lat="19.4424687"
            lng="-99.1415707"
                content={'<a rel="noopener noreferrer" href="https://www.facebook.com/frontera115/" target="_blank"><strong>Frontera</strong></a>'}
                onCloseClick={this.onCloseClick} />
      <Marker
          lat="19.4424737"
          lng="-99.1415707"
          draggable={false}
          onClick={this.onClick} />
          <InfoWindow
          lat="19.4406139"
          lng="-99.1489714"
              content={'<strong>Casa Rivas Mercado</strong>'}
              onCloseClick={this.onCloseClick} />
      <Marker
          lat="19.4424737"
          lng="-99.1415707"
          draggable={false}
          onClick={this.onClick} />
          <InfoWindow
          lat="19.4406139"
          lng="-99.1489714"
              content={'<strong><a rel="noopener noreferrer" href="http://casawabi.org/exhibiciones-santamaria></a>Fundacion Casa Wabi</strong>'}
              onCloseClick={this.onCloseClick} />
      <Marker
          lat="19.4424737"
          lng="-99.1415707"
          draggable={false}
          onClick={this.onClick} />
          <InfoWindow
          lat="19.4410444"
          lng="-99.1587501"
              content={'<strong><a rel="noopener noreferrer" href="https://www.casaequis.com/">Casa Equis</strong></a>'}
              onCloseClick={this.onCloseClick} />

        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'<strong>M74</strong>'}
          onCloseClick={this.onCloseClick} />
      </Gmaps>
    );
  }

}

export default MyGoogleMap