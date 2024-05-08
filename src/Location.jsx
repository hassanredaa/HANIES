import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const defaultCenter = {
    lat: 30.0444,  // Latitude for Cairo, Egypt
    lng: 31.2357   // Longitude for Cairo, Egypt
};


const MyLocationMap = ({ apiKey, onLocationSelect }) => {
    const [markerPosition, setMarkerPosition] = useState(null);

    const handleMapClick = (event) => {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();
        setMarkerPosition({ lat, lng });
        onLocationSelect({ lat, lng });
    };

    return (
        <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={defaultCenter}
                zoom={10}
                onClick={handleMapClick}
            >
                {markerPosition && <Marker position={markerPosition} />}
            </GoogleMap>
        </LoadScript>
    );
}

export default MyLocationMap;
