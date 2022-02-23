import { createContext, useContext, useEffect, useState } from 'react'
import { useCurrentLocation } from './CurrentLocationContext'

const CurrentWeatherContext = createContext();

export const CurrentWeatherProvider = ({ children }) => {
    const { latitude, longitude, isLocationCompleted } = useCurrentLocation();
    const [maxTemperature, setMaxTemperate] = useState("")
    const [minTemperature, setMinTemperate] = useState("")
    const [weather, setWeather] = useState("")

    useEffect(() => {
        if (isLocationCompleted) {
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&appid=06e490985ed7c77ef98d073058c0946a`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setMaxTemperate(Math.round(parseFloat(data.daily[0].temp.max) - 273.15))
                    setMinTemperate(Math.round(parseFloat(data.daily[0].temp.min) - 273.15))
                    setWeather(data.current.weather[0].main.toLowerCase())
                })
        }
    }, [isLocationCompleted])

    const values = { maxTemperature, minTemperature, weather }

    return (
        <CurrentWeatherContext.Provider value={values}> {children} </CurrentWeatherContext.Provider>)
}
export const useCurrentWeather = () => useContext(CurrentWeatherContext)