import React, { useContext, useState } from 'react';
import { PlacesContext, MapContext } from '../context';
import { Feature } from '../interfaces/places';
import { LoadingPlaces } from './LoadingPlaces';

export const SearchResults = () => {
    const { places, isLoadingPlaces, userLocation } = useContext(PlacesContext);

    const { map, getRouteBetweenPoints } = useContext(MapContext);

    const [activeId, setActiveID] = useState('');

    const onPlaceClicked = (place: Feature) => {
        const [lng, lat] = place.center;
        setActiveID(place.id);

        map?.flyTo({
            zoom: 15,
            center: [lng, lat],
        });
    };

    const getRoute = (place: Feature) => {
        if (!userLocation) return;
        const [lng, lat] = place.center;

        getRouteBetweenPoints(userLocation, [lng, lat]);
    };


    if (isLoadingPlaces) {
        return <LoadingPlaces />;
    }

    if (places.length === 0) {
        return <></>;
    }

    return (
        <ul className='list-group mt-3'>
            {places.map((place) => (
                <li
                    className={`list-group-item list-group-item-action pointers ${
                        activeId === place.id ? 'active' : ''
                    }`}
                    key={place.id}
                    onClick={() => onPlaceClicked(place)}
                >
                    <h6>{place.text_es}</h6>
                    <p className='text-muted' style={{ fontSize: '12px' }}>
                        {place.place_name}
                    </p>
                    <button
                        className={`btn btn-sm ${
                            activeId === place.id
                                ? 'btn-outline-light'
                                : 'btn-outline-primary'
                        } `}
                        onClick={() => getRoute(place)}
                    >
                        Direcciones
                    </button>
                </li>
            ))}
        </ul>
    );
};
