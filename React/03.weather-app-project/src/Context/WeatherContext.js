import { createContext, useContext, useEffect, useState } from "react";
import useGeolocation from "react-hook-geolocation";
import { geocoding } from "../constants/geocodingList";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  // weatherKnowledge provides us max and min temperatures and weather forecast information.
  const [weatherKnowledge, setWeatherKnowledge] = useState({
    min: [],
    max: [],
    weather: [],
  });
  const [currentDayWeather, setCurrentDayWeather] = useState({
    min: [],
    max: [],
    weather: [],
  });

  const [cityCoordinate, setCityCoordinate] = useState({
    latitude: "41.292782",
    longitude: "36.33128",
  });

  const [currentCity, setCurrentCity] = useState("");
  const [isLocationCompleted, setIsLocationCompleted] = useState(true);
  const [counter, setCounter] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);

  const geolocation = useGeolocation();
  let temporaryWeek;
  let temporaryCurrentDay;

  //Reach current location
  useEffect(() => {
    if (counter === 0 && !geolocation.error) {
      setCityCoordinate({
        latitude: geolocation.latitude,
        longitude: geolocation.longitude,
      });
    } else if (counter === 0) {
      console.log("No geolocation.");
    }

    setInterval(() => {
      setCounter(1);
    }, 1000);
  }, [geolocation?.latitude]);

  //Update selected city
  useEffect(() => {
    console.log(currentCity, cityCoordinate);
    cityCoordinate && setIsLocationCompleted(true);
    geocoding.map((item) => {
      if (
        parseInt(cityCoordinate.latitude) === parseInt(item.lat) &&
        parseInt(cityCoordinate.longitude) === parseInt(item.lon)
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
          setWindSpeed(data.daily[0].wind_speed);
          temporaryWeek = { min: [], max: [], weather: [] };
          temporaryCurrentDay = { min: [], max: [], weather: [] };

          setWeatherKnowledge(
            createTemporaryKnowledge(1, 7, temporaryWeek, data)
          );

          setCurrentDayWeather(
            createTemporaryKnowledge(0, 1, temporaryCurrentDay, data)
          );
        })
        .then(() => {
          setIsLocationCompleted(!isLocationCompleted);
        })
        .catch((err) => console.log("Error: ", err));
    }
  }, [isLocationCompleted]);

  const updateLatitudeAndLongitude = (updatedGeocoding) => {
    setCityCoordinate({
      latitude: updatedGeocoding.lat,
      longitude: updatedGeocoding.lon,
    });
  };

  const createTemporaryKnowledge = (
    initialValue,
    lastValue,
    targetTemporary,
    data
  ) => {
    for (let i = initialValue; i < lastValue; i++) {
      targetTemporary.min.push(convertCelsius(data.daily[i].temp.min));
      targetTemporary.max.push(convertCelsius(data.daily[i].temp.max));
      targetTemporary.weather.push(data.daily[i].weather[0].main.toLowerCase());
    }

    return targetTemporary;
  };

  const convertCelsius = (number) => {
    return Math.round(parseFloat(number) - 273.15);
  };

  const values = {
    cityCoordinate,
    isLocationCompleted,
    currentCity,
    windSpeed,
    weatherKnowledge,
    currentDayWeather,
    updateLatitudeAndLongitude,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};
export const useWeather = () => useContext(WeatherContext);
