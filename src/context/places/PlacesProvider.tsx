import React, { useEffect, useReducer } from 'react';
import { PlacesContext } from './PlacesContext';
import { placesReducer } from './PlacesReducer';
import { getUserLocation } from '../../helpers';
import { searchApi } from '../../API';
import { Feature, PlacesResponse } from '../../interfaces/places';

export interface PlacesState {
    isLoading: boolean;
    userLocation?: [number, number];
    isLoadingPlaces: boolean;
    places: Feature[];
}

const INITIAL_STATE: PlacesState = {
    isLoading: true,
    userLocation: undefined,
    isLoadingPlaces: false,
    places: [],
};

export interface Props {
    children: JSX.Element | JSX.Element[];
}

export const PlacesProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

    const searchPlacesByTerm = async (query: string): Promise<Feature[]> => {
        if (query.length === 0) {
            dispatch({type: 'setPlaces', payload: []})
            return [];
        }
        if (!state.userLocation)
            throw new Error('No hay ubicación del usuario');

        dispatch({ type: 'setLoadingPlaces' });

        const resp = await searchApi.get<PlacesResponse>(`/${query}.json`, {
            params: {
                proximity: state.userLocation.join(','),
            },
        });

        console.log(resp.data.features[0]);

        dispatch({ type: 'setPlaces', payload: resp.data.features });
        return resp.data.features;
    };

    useEffect(() => {
        getUserLocation().then((lngLat) =>
            dispatch({ type: 'setUserLocation', payload: lngLat })
        );
    }, []);

    return (
        <PlacesContext.Provider value={{ ...state, searchPlacesByTerm }}>
            {children}
        </PlacesContext.Provider>
    );
};
