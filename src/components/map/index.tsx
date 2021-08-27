import { FunctionalComponent, h } from 'preact';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';

import MiniMapComponent from '../miniMap';
import style from './style.css';

const MapComponent: FunctionalComponent = ({ position, zoom }: any) => {
  return (
    <MapContainer class={style.leafletcontainer} center={position} zoom={zoom}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      />
      <ZoomControl position="topright" />
      <Marker position={position}>
        <Popup>
          <span>this is test<br /> just for learn</span>
        </Popup>
      </Marker>
      <MiniMapComponent position="topright" />
    </MapContainer>
  );
};
export default MapComponent;
