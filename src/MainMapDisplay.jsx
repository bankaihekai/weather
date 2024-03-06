import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MainMapDisplay = (props) => {
  useEffect(() => {
    const map = L.map('map').setView([props.latitude, props.longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([props.latitude, props.longitude]).addTo(map);

    // You can add markers, polygons, etc. here

    return () => {
      // Clean up when the component is unmounted
      map.remove();
    };
  }, [props.latitude, props.longitude]); 

  return <div id="map" style={{ height: '100vh' }} />;
};

export default MainMapDisplay;
