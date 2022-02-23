import { createContext, useContext, useState } from "react";
import { useCurrentLocation } from "./CurrentLocationContext";

const FindCityContext = createContext();

export const FindCityProvider = ({ children }) => {
    const {latitude, longitude} = useCurrentLocation();

    const [city, setCity] = useState("");

    const values = { city };

    return (
        <FindCityContext.Provider value={values}>{children}</FindCityContext.Provider>
    )
};

export const useFindCity = () => useContext(FindCityContext);