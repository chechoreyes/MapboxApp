import React from 'react';
import { PlacesProvider, MapProvider } from './context';
import { HomeSceen } from './screens';
import './styles.css';

export const MapApp = () => {
    return (
        <PlacesProvider>
            <MapProvider>
                <HomeSceen />
            </MapProvider>
        </PlacesProvider>
    );
};
