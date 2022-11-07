import style from "./style.module.css";
import { useWeather } from "../../Context/WeatherContext";

function ImageGenerator() {
  const { currentDayWeather } = useWeather();

  return (
    <div className={style.weatherPictureContainer}>
      <img
        className={style.weatherPicture}
        src={`../img/background-${currentDayWeather}.jpg`}
        alt={`${currentDayWeather} view`}
      />
    </div>
  );
}

export default ImageGenerator;
