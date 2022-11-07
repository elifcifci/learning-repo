import { useEffect, useState } from "react";
import Header from "../Header";
import Cards from "../Cards";
import style from "./style.module.css";
import ImageGenerator from "./ImageGenerator";
import { geocoding } from "../../constants/geocodingList";
import { useWeather } from "../../Context/WeatherContext";

function Container() {
  const [updatedGeocoding, setUpdatedGeocoding] = useState([{}]);
  const { updateLatitudeAndLongitude } = useWeather();

  useEffect(() => {
    updateLatitudeAndLongitude(updatedGeocoding);
  }, [updatedGeocoding]);

  let updateCity = (city) => {
    let filteredCity = geocoding.filter((item) => {
      if (item.cityName == city) {
        return item;
      }
    });

    if (filteredCity[0].cityName) {
      setUpdatedGeocoding(filteredCity[0]);
    }
  };

  return (
    <div className={style.container}>
      <ImageGenerator />
      <div className={style.innerContainer}>
        <Header updateCity={updateCity} />
        <Cards isForCurrentDay={false} />
      </div>
    </div>
  );
}

export default Container;
