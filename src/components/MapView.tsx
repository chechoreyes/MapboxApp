import React, { useContext, useLayoutEffect, useRef } from 'react';
import { PlacesContext, MapContext } from '../context';
import { Loading } from './';
import mapboxgl from 'mapbox-gl';

export const MapView = () => {
    const { isLoading, userLocation } = useContext(PlacesContext);
    const {setMap } = useContext(MapContext)
    const mapDiv = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
      if (!isLoading){
        const map = new mapboxgl.Map({
          container: mapDiv.current!,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: userLocation,
          zoom: 14
        });

        setMap(map)
      }
    }, [isLoading])

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div
            ref={mapDiv}
            style={{
                backgroundColor: 'red',
                height: '100vh',
                left: 0,
                position: 'fixed',
                top: 0,
                width: '100vw',
            }}
        >
            {userLocation?.join(',')}
        </div>
    );
};
