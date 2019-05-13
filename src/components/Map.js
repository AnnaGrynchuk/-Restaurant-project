import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { LeafletStyles } from 'styled-leaflet';
import styled from 'styled-components';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const LeafletMap = styled(Map)`
width: 400px;
height: 400px;
margin: 50px 0;
`;
const position = [50.44427829045941, 30.59349060058594];
class Maps extends Component {
  render() {

    console.log(Marker);
    return (
      <>
        <LeafletStyles />
        <LeafletMap
          center={position}
          zoom={13}
          maxZoom={20}
          attributionControl={true}
          zoomControl={true}
          doubleClickZoom={true}
          scrollWheelZoom={true}
          dragging={true}
          animate={true}
          easeLinearity={0.35}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />

          <Marker position={position}>
            <Popup>Universe restaurant</Popup>
          </Marker>
        </LeafletMap>
      </>
    );
  }
}

export default Maps
