import { createContext, useContext, useEffect, useState } from 'react'
import useGeolocation from 'react-hook-geolocation'

const CurrentLocationContext = createContext();

export const CurrentLocationProvider = ({ children }) => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [isLocationCompleted, setIsLocationCompleted] = useState(false)
  const geolocation = useGeolocation();

  useEffect(() => {
    if (!geolocation.error) {
      setLatitude(geolocation.latitude)
      setLongitude(geolocation.longitude)
    }
    else {
      console.log("No geolocation.");
    }
  }, [geolocation])

  useEffect(() => {
    if (latitude && longitude) {
      setIsLocationCompleted(true);
    }
  }, [latitude, longitude])

  const values = { latitude, longitude, isLocationCompleted };

  return (
    <CurrentLocationContext.Provider value={values}>{children}</CurrentLocationContext.Provider>
  )
};

export const useCurrentLocation = () => useContext(CurrentLocationContext);



