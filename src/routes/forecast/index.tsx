import { FunctionalComponent, h } from 'preact';

import MapComponent from '../../components/map';
import style from './style.css';

const Forecast: FunctionalComponent = () => {
    return (
        <MapComponent position={[35.689,51.389]} zoom={7} />
    );
};

export default Forecast;
