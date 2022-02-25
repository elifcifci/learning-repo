import React, { useState } from "react";
import { cities } from "../../constans";
import style from "./style.module.css";
import { useWeather } from "../../Context/WeatherContext";

function Filter({ updateCity }) {
  const { currentCity } = useWeather();

  function renderWeatherData() {
    return cities.map((city) => (
      <option key={city} className={style.filter} value={city}>
        {city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()}
      </option>
    ));
  }

  return (
    <div>
      <h1 className={style.h1}>WEATHER APP</h1>

      <select className={style.cardHeader} onChange={(e) => updateCity(e.target.value)}>
        <option className={style.filter} value={""}>{`${
          currentCity ? currentCity : "Select City"
        }`}</option>
        {renderWeatherData()}
      </select>
      <br />
      <br />
    </div>
  );
}

export default Filter;
