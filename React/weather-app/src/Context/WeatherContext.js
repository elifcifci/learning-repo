import { createContext, useContext, useEffect, useState } from 'react'
import { useCurrentLocation } from './CurrentLocationContext'

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const { latitude, longitude, isLocationCompleted } = useCurrentLocation();
    const [weatherKnowledge, setWeatherKnowledge] = useState([])


    useEffect(() => {
        if (isLocationCompleted) {
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&appid=06e490985ed7c77ef98d073058c0946a`)
                .then((res) => res.json())
                .then((data) => {
                    setWeatherKnowledge(data.daily);
                })
        }
    }, [isLocationCompleted])

    const values = { weatherKnowledge }

    return (
        <WeatherContext.Provider value={values}> {children} </WeatherContext.Provider>)
}
export const useWeather = () => useContext(WeatherContext)