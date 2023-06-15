"use client"

import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import React from 'react';
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
        googleMapsApiKey: 'AIzaSyCc4o0kyaIeCXI-uoSINBpI8JsSy1kZ5Uk'
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
          zoom={12}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
        </GoogleMap>
    ) : <></>
  }