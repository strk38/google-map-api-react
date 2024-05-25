import GoogleMapReact from 'google-map-react';
import './App.css'
import { googleAPIKey } from './googleApikey';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function App() {

  const defaultProps = {
    center: {
      lat: 22.3752,
      lng: 91.8349
    },
    zoom: 18
  };


  return (
    <>
      <div style={{ height: '500px', width: '500px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleAPIKey }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={defaultProps.center.lat}
            lng={defaultProps.center.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    </>
  )
}

export default App
