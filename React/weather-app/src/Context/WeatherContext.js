import { createContext, useContext, useEffect, useState } from "react";
import useGeolocation from "react-hook-geolocation";
import { geocoding } from "../constans";
const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherKnowledge, setWeatherKnowledge] = useState([]);
  const [cityCoordinate, setCityCoordinate] = useState({
    latitude: "41.292782",
    longitude: "36.33128",
  });
  const [currentCity, setCurrentCity] = useState("");
  const [isLocationCompleted, setIsLocationCompleted] = useState(true);
  const geolocation = useGeolocation();

  //Reach current location
  useEffect(() => {
    if (!geolocation.error) {
      setCityCoordinate({
        latitude: geolocation.latitude,
        longitude: geolocation.longitude,
      });
    } else {
      console.log("No geolocation.");
    }
  }, [geolocation?.latitude]);

  useEffect(() => {
    if (cityCoordinate) {
      setIsLocationCompleted(true);
    }

    geocoding.map((item) => {
      let citiesLatitude = parseInt(item.lat);
      let citiesLongitude = parseInt(item.lon);

      if (
        parseInt(cityCoordinate.latitude) === citiesLatitude &&
        parseInt(cityCoordinate.longitude) === citiesLongitude
      ) {
        return setCurrentCity(item.cityName);
      }
    });
  }, [cityCoordinate]);

  //Reach weather knowledge
  useEffect(() => {
    if (isLocationCompleted) {
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${cityCoordinate.latitude}&lon=${cityCoordinate.longitude}&exclude=minutely,hourly,alerts&appid=06e490985ed7c77ef98d073058c0946a`
      )
        .then((res) => res.json())
        .then((data) => {
          setWeatherKnowledge(data.daily);
        });
      setIsLocationCompleted(!isLocationCompleted);
    }
  }, [isLocationCompleted]);

  const updateLatitudeAndLongitude = (updatedGeocoding) => {
    setCityCoordinate({
      latitude: updatedGeocoding.lat,
      longitude: updatedGeocoding.lon,
    });
  };

  const values = {
    updateLatitudeAndLongitude,
    weatherKnowledge,
    cityCoordinate,
    isLocationCompleted,
    currentCity,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};
export const useWeather = () => useContext(WeatherContext);
