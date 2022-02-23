import {createContext, useContext, useState, useEffect } from 'react';

const CurrentDayNameContext = createContext();

export const CurrentDayNameProvider = ({ children }) => {
    const [dayName, setDayName] = useState("");
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    useEffect(() => {
        const day = new Date();
        setDayName(weekdays[day.getDay()])
    }, [dayName]);

    const values = {weekdays, dayName}
    return (
        <CurrentDayNameContext.Provider value={values}> {children} </CurrentDayNameContext.Provider>
    )
}

export const useCurrentDay = () => useContext(CurrentDayNameContext);
