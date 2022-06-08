import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { MapApp } from './MapApp';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

if (!navigator.geolocation) {
    alert('Tu navegador no tiene opción de Geolocation');
}
mapboxgl.accessToken =
    'pk.eyJ1IjoiY2hlY2hvcmV5ZXMiLCJhIjoiY2w0MnJpd2N6MDJqdjNpcXg2ZWl0bGNmeCJ9.3xcJBowECq6wnZ4xxYCUPg';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <MapApp />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
