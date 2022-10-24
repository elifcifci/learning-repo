import { useEffect, useState } from "react";
import { useWeather } from "../../Context/WeatherContext";
import { weekDays } from "../../constants/constants";
import style from "./style.module.css";

function Cards() {
  const { weatherKnowledge } = useWeather();
  const [maxTemperatures, setMaxTemperates] = useState([]);
  const [minTemperatures, setMinTemperates] = useState([]);
  const [weathers, setWeathers] = useState([]);
  const [dayName, setDayName] = useState([]);

  useEffect(() => {
    if (weatherKnowledge?.length > 0) {
      let maxTemperatureArray = [];
      let minTemperatureArray = [];
      let weatherArray = [];

      for (let i = 0; i < 8; i++) {
        let convertedCelsiusMaxTemperature = Math.round(
          parseFloat(weatherKnowledge[i].temp.max) - 273.15
        );
        let convertedCelsiusMinTemperature = Math.round(
          parseFloat(weatherKnowledge[i].temp.min) - 273.15
        );
        let allWeathers = weatherKnowledge[i].weather[0].main.toLowerCase();

        maxTemperatureArray.push(convertedCelsiusMaxTemperature);
        minTemperatureArray.push(convertedCelsiusMinTemperature);
        weatherArray.push(allWeathers);
      }

      setMaxTemperates(maxTemperatureArray);
      setMinTemperates(minTemperatureArray);
      setWeathers(weatherArray);
    }
  }, [weatherKnowledge]);

  useEffect(() => {
    const day = new Date();
    let weekDaysIndex = day.getDay();
    let weekDayArray = [];

    for (let x = 0; x < 7; x++) {
      weekDayArray.push(weekDays[weekDaysIndex + x]);

      if (x + weekDaysIndex === 6) {
        for (let y = 0; y < weekDaysIndex + 1; y++) {
          weekDayArray.push(weekDays[y]);
        }
        break;
      }
    }
    setDayName(weekDayArray);
  }, []);

  return (
    <div className={` ${style.cardContainer} d-flex justify-content-center`}>
      {weathers.map((item, index) => {
        return (
          <div
            key={index}
            className={`${style.cards} ${index === 0 && style.currentDay}`}
          >
            <h5 className={style.h5}>{dayName[index]}</h5>
            <img className={style.weatherImages} src={`./img/${item}.png`} />
            <div>
              <span className={style.maxTemperature}>
                {maxTemperatures[index]} &#176;{" "}
              </span>
              <span className={style.minTemperature}>
                {minTemperatures[index]} &#176;{" "}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
