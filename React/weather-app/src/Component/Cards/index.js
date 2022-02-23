import { useEffect, useState } from 'react'
import { useCurrentWeather } from '../../Context/CurrentWeatherContext';
import { useCurrentDay } from '../../Context/CurrentDayNameContext';
import style from './style.module.css'

function Cards() {
  const { maxTemperature, minTemperature, weather } = useCurrentWeather();
  const { dayName, weekdays } = useCurrentDay();

  return (
    <div className={style.card, "row"}>
      <div className={style.days, "col-sm-1"}>
        <h5 className={style.h5}>{dayName}</h5>
        <img className={style.weatherImages} src={`./img/${weather}.png`} />
        <div>
          <span className={style.maxTemperature}>{maxTemperature} &#176; </span>
          <span className={style.minTemperature}>{minTemperature} &#176; </span>
        </div>
      </div>
    </div>)
}

export default Cards;