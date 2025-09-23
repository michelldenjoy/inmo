import React, { useEffect, useRef } from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';

const MapComponent = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      new window.google.maps.Map(ref.current, {
        center: { lat: 40.4168, lng: -3.7038 }, // Madrid
        zoom: 13,
      });
    }
  }, []);

  return <div ref={ref} style={{ width: '100%', height: '400px' }} />;
};

const SimpleMap = () => {
  return (
    <Wrapper apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <MapComponent />
    </Wrapper>
  );
};

export default SimpleMap;