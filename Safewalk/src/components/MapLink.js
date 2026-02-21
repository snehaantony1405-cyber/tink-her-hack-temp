import React, { useEffect, useState } from 'react';
import { getCurrentLocation } from '../services/geolocation';

const MapLink = () => {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        const fetchLocation = async () => {
            const currentLocation = await getCurrentLocation();
            setLocation(currentLocation);
        };
        fetchLocation();
    }, []);

    const generateMapLink = () => {
        if (location) {
            const { latitude, longitude } = location;
            return `https://www.google.com/maps/@${latitude},${longitude},15z`;
        }
        return '#';
    };

    return (
        <div>
            {location ? (
                <a href={generateMapLink()} target="_blank" rel="noopener noreferrer">
                    Share My Location on Google Maps
                </a>
            ) : (
                <p>Fetching location...</p>
            )}
        </div>
    );
};

export default MapLink;