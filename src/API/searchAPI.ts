import axios from 'axios';

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token:
            'pk.eyJ1IjoiY2hlY2hvcmV5ZXMiLCJhIjoiY2w0MnJpd2N6MDJqdjNpcXg2ZWl0bGNmeCJ9.3xcJBowECq6wnZ4xxYCUPg',
    },
});


export default searchApi;