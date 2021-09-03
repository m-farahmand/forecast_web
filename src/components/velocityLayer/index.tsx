import { FunctionalComponent, h } from 'preact';
import { useLeafletContext } from '@react-leaflet/core';
import { useMap } from 'react-leaflet';
import { useEffect } from 'preact/hooks';
import 'leaflet-velocity';
import L from 'leaflet';

function getVelocity() {
  let velocityLayer = (L as any).velocityLayer({
    displayValues: false,
    displayOptions: {
      velocityType: 'Global Wind',
      position: 'bottomleft',
      emptyString: 'No velocity data',
      angleConvention: 'bearingCW',
      displayPosition: 'bottomleft',
      displayEmptyString: 'No velocity data',
      speedUnit: 'kt'
    },

    // OPTIONAL
    minVelocity: 0,          // used to align color scale
    maxVelocity: 10,         // used to align color scale
    velocityScale: 0.01,    // modifier for particle animations, arbitrarily defaults to 0.005
    //colorScale: []       // define your own array of hex/rgb colors
  });
  let request = fetch('./wind.json');

  request
    .then(r => r.json())
    .then(data => {
      debugger
      if (velocityLayer) {
        velocityLayer.setData(data);
      }
    });
  return velocityLayer;
}
const VelocityLayer = (props: any) => {
  debugger
  const context = useLeafletContext();

  useEffect(() => {
    const layer = getVelocity();
    const container = context.layerContainer || context.map
    debugger
    container.addLayer(layer)

    return () => {
      container.removeLayer(layer)
    }
  })

  return null
}

export default VelocityLayer;


