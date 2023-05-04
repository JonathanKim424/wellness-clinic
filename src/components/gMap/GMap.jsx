import { React, useMemo } from 'react';
import './gMap.css';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

function GMap() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
}

function Map() {
    const center = useMemo(() => ({ lat: 34.01320173126053, lng:-118.48354153944086 }), []);
    console.log(process.env.GOOGLE_MAPS_API_KEY);
    return (
        <GoogleMap
            zoom={14}
            center={center}
            mapContainerClassName="map-container"
        >
            <MarkerF position={center} />
        </GoogleMap>
    )
}

export default GMap