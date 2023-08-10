import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

export default function Maps() {

  const containerStyle = {
    width: '26rem',
    height: '16rem',
    margin: '3rem auto auto auto',
  };

  const { isLoaded } = useLoadScript({   
    googleMapsApiKey: process.env.REACT_APP_MAPS_KEY,
  })

  if (!isLoaded) return <div>Loading...</div>

  return (
    <GoogleMap 
      mapContainerStyle={containerStyle}
      zoom={11} 
      center={{lat: -37.830935, lng: 144.958457}} 
    >  
      <Marker position={{lat: -37.830935, lng: 144.958457}}></Marker>
    </GoogleMap>
  )
}
