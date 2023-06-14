"use client"

import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import React from 'react';

const apiKey = process.env.GOOGLE_API_KEY;

const center = {
    lat: 33.906725,
    lng: -84.599597
  };

export default function GoogleMapC({width, height}) {
    const containerStyle = {
        width: width,
        height: height
      };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey
      })
    
      const [map, setMap] = React.useState(null)
    
      const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
    
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])

      return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <Marker position={center} title="Cristi's Bakery"/>
        </GoogleMap>
    ) : <></>
  }