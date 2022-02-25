import { useContext, useEffect, useState } from 'react'
import Filter from '../Filter';
import Cards from '../Cards';
import style from './style.module.css'
import { geocoding } from "../../constans"
import { useWeather } from '../../Context/WeatherContext'


function Container() {
  const [updatedGeocoding, setUpdatedGeocoding] = useState([{}]);
  const { updateLatitudeAndLongitude} = useWeather();

  let updateCity = (city) => {
    let filteredCity = geocoding.filter((item) => {
      if (item.cityName == city) {
        return item;
      }
    })

    if (filteredCity[0].cityName) {
      setUpdatedGeocoding(filteredCity[0]);
    }

  }

  useEffect(() => {
    updateLatitudeAndLongitude(updatedGeocoding);
  }, [updatedGeocoding])

  return (
    <div className={style.container}>
      <Filter updateCity={updateCity} />
      <Cards />
    </div>
  );
}

export default Container;