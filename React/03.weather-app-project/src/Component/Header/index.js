import React from "react";
import Filter from "../Filter";
import style from "./style.module.css";
import { useDateKnowledge } from "../../Context/DateContext";
import { useWeather } from "../../Context/WeatherContext";
import Cards from "../Cards/index";
function Header({ updateCity }) {
  const { dayNames, clock, currentDate } = useDateKnowledge();
  const { currentDayWeather } = useWeather();

  return (
    <div className={style.headerContainer}>
      <section className={style.date}>
        <span>{clock}</span>
        <div>
          <span className={style.dayName}>{dayNames[0]}, </span>
          <span>{currentDate}</span>
        </div>
      </section>

      <section>
        <Cards isForCurrentDay={true} />
        {/* <img
          className={style.weatherImages}
          src={`./img/${currentDayWeather.weather}.png`}
        />
        <div className={style.temperatures}>
          <span>{currentDayWeather.max} &#176; </span>
          <span>{currentDayWeather.min} &#176; </span>
        </div>*/}
      </section>
      <Filter className={style.filter} updateCity={updateCity} />
    </div>
  );
}

export default Header;
