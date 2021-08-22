import { FunctionalComponent, h } from 'preact';
import { useReducer } from 'preact/hooks';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet'
import style from './style.css';

interface MapConfig {
  lat: number;
  lng: number;
  zoom: number;
}

const MapComponent: FunctionalComponent = () => {
  // const presetConfig = {
  //   lat: 51.505,
  //   lng: -0.09,
  //   zoom: 13,
  // };
  // const setConfigCallback = (prevData, newData) => {
  //   debugger
  //   const tmp = { ...prevData, ...newData };
  //   return tmp;
  // }
  // const { config, setConfig } = useReducer(setConfigCallback, presetConfig);
  const position = [51.505, -0.09];
  return (
    <MapContainer class={style.leafletcontainer} center={position} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      />
      <ZoomControl position="topright" />
      <Marker  position={position}>
        <Popup>
          <span>A pretty CSS3 popup. <br /> Easily customizable.</span>
        </Popup>
      </Marker>
    </MapContainer>
  );
};
export default MapComponent;
