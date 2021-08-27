import { FunctionalComponent, h } from 'preact';
import { MapContainer, TileLayer, LayersControl, Marker, Popup, ZoomControl } from 'react-leaflet';

import MiniMapComponent from '../miniMap';
import style from './style.css';

const MapComponent = ({ position, zoom }: any) => {
  return (
    <MapContainer class={style.leafletcontainer} center={position} zoom={zoom}>
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
        </LayersControl.BaseLayer>
      </LayersControl>
      <ZoomControl position="topleft" />
      <Marker position={position}>
        <Popup>
          <span>this is test<br /> just for learn</span>
        </Popup>
      </Marker>
      <MiniMapComponent position="bottomright" />
    </MapContainer>
  );
};
export default MapComponent;
