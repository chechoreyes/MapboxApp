import React from 'react'
import { BtnMyLocation, MapView, ReactLogo, SearchBar } from '../components'

export const HomeSceen = () => {
  return (
    <div>
        <MapView />
        <BtnMyLocation />
        <ReactLogo />
        <SearchBar />
    </div>
  )
}
