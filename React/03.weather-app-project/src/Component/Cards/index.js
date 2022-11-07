import { useWeather } from "../../Context/WeatherContext";
import { useDateKnowledge } from "../../Context/DateContext";
import style from "./style.module.css";

function Cards({ isForCurrentDay }) {
  const { weatherKnowledge, currentDayWeather } = useWeather();
  const { dayNames } = useDateKnowledge();

  const constant = isForCurrentDay ? currentDayWeather : weatherKnowledge;
  console.log("weatherKnowledge: ", weatherKnowledge);

  return (
    <div className={style.cardContainer}>
      {constant.min.map((item, index) => {
        return (
          <div key={index} className={style.cards}>
            <h5 className={style.h5}>
              {isForCurrentDay ? dayNames[index] : dayNames[index + 1]}
            </h5>
            <img
              className={style.weatherImages}
              src={`./img/${constant.weather[index]}.png`}
            />
            <div className={style.temperatures}>
              <span>{constant.max[index]} &#176; </span>
              <span>{item} &#176; </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
