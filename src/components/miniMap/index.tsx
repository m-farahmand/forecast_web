import { FunctionalComponent, h } from 'preact';
import { useMemo, useState, useCallback } from 'preact/hooks';
import { MapContainer, TileLayer, useMap, useMapEvent, Rectangle } from 'react-leaflet'
import { useEventHandlers } from '@react-leaflet/core';
import { LeafletElement } from '@react-leaflet/core/types/element';

import style from './style.css';
import { RectangleProps } from 'react-leaflet/types/Rectangle';
import { LatLngBoundsExpression, PathOptions } from 'leaflet';

const POSITION_CLASSES:any = {
    bottomleft: 'leaflet-bottom leaflet-left',
    bottomright: 'leaflet-bottom leaflet-right',
    topleft: 'leaflet-top leaflet-left',
    topright: 'leaflet-top leaflet-right',
}

const BOUNDS_STYLE = { weight: 1 }

const MinimapBounds = ({ parentMap, zoom }: any) => {
    const minimap = useMap()

    // Clicking a point on the minimap sets the parent's map center
    const onClick = useCallback(
        (e: any) => {
            parentMap.setView(e.latlng, parentMap.getZoom())
        },
        [parentMap],
    )
    useMapEvent('click', onClick)

    // Keep track of bounds in state to trigger renders
    const [bounds, setBounds] = useState(parentMap.getBounds())
    const onChange = useCallback(() => {
        setBounds(parentMap.getBounds())
        // Update the minimap's view to match the parent map's center and zoom
        minimap.setView(parentMap.getCenter(), zoom)
    }, [minimap, parentMap, zoom])

    // Listen to events on the parent map
    const handlers = useMemo(() => ({ move: onChange, zoom: onChange }), [])
    useEventHandlers({ instance: parentMap } as LeafletElement<any, any>, handlers)

    return <Rectangle bounds={bounds as LatLngBoundsExpression} pathOptions={BOUNDS_STYLE as PathOptions} />
}

const MiniMapComponent = ({ position, zoom }:any) => {
    const parentMap = useMap()
    const mapZoom = zoom || 0

    // Memoize the minimap so it's not affected by position changes
    const minimap = useMemo(
        () => (
            <MapContainer
                style={{ height: 80, width: 80 }}
                center={parentMap.getCenter()}
                zoom={mapZoom}
                dragging={false}
                doubleClickZoom={false}
                scrollWheelZoom={false}
                attributionControl={false}
                zoomControl={false}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <MinimapBounds parentMap={parentMap} zoom={mapZoom} />
            </MapContainer>
        ),
        [],
    )

    const positionClass =
        (position && POSITION_CLASSES[position]) || POSITION_CLASSES.topright
    return (
        <div className={positionClass}>
            <div className="leaflet-control leaflet-bar">{minimap}</div>
        </div>
    )
}

export default MiniMapComponent;
