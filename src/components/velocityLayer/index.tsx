import { FunctionalComponent, h } from 'preact';
import { useLeafletContext } from '@react-leaflet/core';
import { useMap } from 'react-leaflet';
import { useEffect } from 'preact/hooks';
import 'leaflet-velocity';
import L from 'leaflet';

import { httpClient } from '../../common';

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
  //@TODO should be get light data depend on current location
  let request = httpClient("winds", { });

  request
    .then(r => r.json())
    .then(data => {
      if (velocityLayer) {
        velocityLayer.setData(data);
      }
    });
  return velocityLayer;
}
const VelocityLayer = (props: any) => {
  const context = useLeafletContext();

  useEffect(() => {
    const layer = getVelocity();
    const container = context.layerContainer || context.map
    container.addLayer(layer)

    return () => {
      container.removeLayer(layer)
    }
  })

  return null
}

export default VelocityLayer;


