import { createContext, useContext, useState, useEffect } from "react";

const DateContext = createContext();

export const DateProvider = ({ children }) => {
  const day = new Date();
  const [dayNames, setDayNames] = useState([]);
  const [clock, setClock] = useState(`${day.getHours()} : ${day.getMinutes()}`);
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let currentDate = `${day.getDate()} ${
    months[day.getMonth()]
  } ${day.getFullYear()}`;

  useEffect(() => {
    let weekDayIndex = day.getDay();
    setDayNames([
      ...weekDays.slice(weekDayIndex, 7),
      ...weekDays.slice(0, weekDayIndex),
    ]);

    setTimeout(setClock(`${day.getHours()} : ${day.getMinutes()}`), 1000);
  }, []);

  const values = {
    clock,
    dayNames,
    currentDate,
  };
  return <DateContext.Provider value={values}>{children}</DateContext.Provider>;
};

export const useDateKnowledge = () => useContext(DateContext);
