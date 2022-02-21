import { useEffect, useState } from 'react'
import { useCurrentLocation } from '../../Context/CurrentLocationContext'

import style from './style.module.css'

function Location() {
  //const [apiData, setApiData] = useState({});
  const [part, setPart] = useState("current");
  const { latitude, longitude } = useCurrentLocation();

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=${part}&appid=06e490985ed7c77ef98d073058c0946a`)
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, [])

  return (
    <div>

    </div>)
}

export default Location;