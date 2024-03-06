import { useState, useEffect } from 'react';
import MainMapDisplay from './MainMapDisplay.jsx';

function App() {
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [error, setError] = useState(null);
    console.log(error);
    // fetch current location 
    useEffect(() => {
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        const successCallback = (position) => {
            setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });
        };

        const errorCallback = (error) => {
            setError(error.message);
        };

        const watchId = navigator.geolocation.watchPosition(successCallback, errorCallback, options);

        return () => {
            navigator.geolocation.clearWatch(watchId);
        };
    }, []);

    return (
        <div>
            <span>oten</span>
            <MainMapDisplay latitude={location.latitude ?? 0} longitude={location.longitude ?? 0} />
        </div>
    );
}

export default App;
