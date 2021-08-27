import { FunctionalComponent, h } from 'preact';

import MapComponent from '../../components/map';
import style from './style.css';

const Forecast: FunctionalComponent = () => {
    return (
        <MapComponent position={[51.505, -0.09]} zoom={[13]} />
    );
};

export default Forecast;
