import { useEffect, useState } from 'react'
import { useWeather } from '../../Context/WeatherContext';
import { weekDays } from '../../constans';
import style from './style.module.css'

function Cards() {
  const { weatherKnowledge } = useWeather();

  const [maxTemperatures, setMaxTemperates] = useState("")
  const [minTemperatures, setMinTemperates] = useState("")
  const [weathers, setWeathers] = useState("")
  const [dayName, setDayName] = useState("")

  useEffect(() => {

    if (weatherKnowledge?.length > 0) {
      let maxTemperatureArray = [];
      let minTemperatureArray = [];
      let weatherArray = [];

      for (let i = 0; i < 8; i++) {
        let convertedCelsiusMaxTemperature = Math.round(parseFloat(weatherKnowledge[i].temp.max) - 273.15);
        let convertedCelsiusMinTemperature = Math.round(parseFloat(weatherKnowledge[i].temp.min) - 273.15);
        let allWeathers = weatherKnowledge[i].weather[0].main.toLowerCase();

        maxTemperatureArray.push(convertedCelsiusMaxTemperature);
        minTemperatureArray.push(convertedCelsiusMinTemperature);
        weatherArray.push(allWeathers);
      }

      setMaxTemperates(maxTemperatureArray)
      setMinTemperates(minTemperatureArray)
      setWeathers(weatherArray)
    }
  }, [weatherKnowledge])

  useEffect(() => {
    const day = new Date();
    setDayName(weekDays[day.getDay()])
  }, []);

  console.log("weathers", weathers);

  // const weatherImage = () => {
  //   if (weathers?.length > 0) {
  //     weathers.map((item) => {
  //       <div className={"col-sm-1"}>
  //         <img className={style.weatherImages} src={`./img/${item}.png`} />
  //       </div>
  //     })
  //   }
  // }

  return (
    <div className={"row"}>
      {/* <div className={"col-sm-1"}>
        <div className={style.cards}>
          <h5 className={style.h5}>{dayName}</h5>
         <img className={style.weatherImages} src={`./img/${weathers}.png`} />
         <div>
           <span className={style.maxTemperature}>{maxTemperatures} &#176; </span>
           <span className={style.minTemperature}>{minTemperatures} &#176; </span>
         </div>
        </div>
      </div> */}
    </div>)
}

export default Cards;