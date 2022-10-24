import React from "react";
import style from "./style.module.css";
import { geocoding } from "../../constants/constants";
import { useWeather } from "../../Context/WeatherContext";

function Filter({ updateCity }) {
  const { currentCity } = useWeather();

  function renderWeatherData() {
    return geocoding.map((item) => (
      <option
        key={item.cityName}
        className={style.filter}
        value={item.cityName}
      >
        {item.cityName.charAt(0).toUpperCase() +
          item.cityName.slice(1).toLowerCase()}
      </option>
    ));
  }

  return (
    <div>
      <select
        className={style.cardHeader}
        onChange={(e) => updateCity(e.target.value)}
      >
        <option className={style.filter} value={""}>
          {`${currentCity ? currentCity : "Select City"}`}
        </option>
        {renderWeatherData()}
      </select>
      <br />
      <br />
    </div>
  );
}

export default Filter;
