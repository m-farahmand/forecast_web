import { FunctionalComponent, h } from 'preact';
import { MapContainer, TileLayer, LayersControl, Marker, Popup, ZoomControl } from 'react-leaflet';

import style from './style.css';
import MiniMapComponent from '../miniMap';

const MapComponent = ({position,zoom}:any) => {

  return (
    <MapContainer class={style.leafletcontainer} center={position } zoom={zoom}>
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="نقشه معمولی">
          <TileLayer
            attribution=' نقشه براساس &copy;OpenStreetMap'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
        </LayersControl.BaseLayer>
      </LayersControl>
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
