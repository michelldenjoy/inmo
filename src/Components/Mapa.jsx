import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 40.4168, // Madrid
  lng: -3.7038
};

function Mapa() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAtxit6HPeuCWgxo0TLb6HnJlxQVVIS9eU">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Puedes agregar marcadores u otros elementos aquí */}
      </GoogleMap>
    </LoadScript>
  );
}

export default Mapa;
