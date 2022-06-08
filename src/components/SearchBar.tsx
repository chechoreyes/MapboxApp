import React, { ChangeEvent, useContext, useRef } from 'react';
import { PlacesContext } from '../context/places/PlacesContext';
import { SearchResults } from './SearchResults';

export const SearchBar = () => {
    const { searchPlacesByTerm } = useContext(PlacesContext);

    const debounceRef = useRef<NodeJS.Timeout>();

    const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
        if (debounceRef.current) clearTimeout(debounceRef.current);

        debounceRef.current = setTimeout(() => {
            console.log(event.target.value);
            searchPlacesByTerm(event.target.value);
        }, 350);
    };

    return (
        <div className='search-container'>
            <input
                type='text'
                className='form-control'
                placeholder='Buscar lugar...'
                onChange={onQueryChanged}
            />
            <SearchResults />
        </div>
    );
};
