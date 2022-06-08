import axios from 'axios';

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        language: 'es',
        access_token:
            'pk.eyJ1IjoiY2hlY2hvcmV5ZXMiLCJhIjoiY2w0MnJpd2N6MDJqdjNpcXg2ZWl0bGNmeCJ9.3xcJBowECq6wnZ4xxYCUPg',
    },
});

export default directionsApi;
