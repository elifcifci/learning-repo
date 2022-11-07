import React from "react";
import style from "./style.module.css";
import { geocoding } from "../../constants/geocodingList";
import { useWeather } from "../../Context/WeatherContext";

function Filter({ updateCity }) {
  const { currentCity } = useWeather();

  function renderWeatherData() {
    return geocoding.map((item) => (
      <option
        key={item.cityName}
        className={`${style.filter} ${style.selectSelected}`}
        value={item.cityName}
      >
        {item.cityName.charAt(0).toUpperCase() +
          item.cityName.slice(1).toLowerCase()}
      </option>
    ));
  }

  return (
    <div className={style.customSelectContainer}>
      <select
        className={style.customSelect}
        onChange={(e) => updateCity(e.target.value)}
      >
        <option className={style.filter} value={""}>
          {`${currentCity ? currentCity : "Select City"}`}
        </option>
        {renderWeatherData()}
      </select>
    </div>
  );
}

export default Filter;
