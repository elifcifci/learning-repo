import {useEffect, useState} from 'react'
import Header from '../Header';
import Filter from '../Filter';
import Cards from '../Cards';
import style from './style.module.css'

function Container() {
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=06e490985ed7c77ef98d073058c0946a`)
      .then((res) => res.json())
      .then((data) => setApiData(data))
  }, [])

  return (
    <div className={style.container}>
      <Header />
      <Filter />
      <Cards />
    </div>
  );
}

export default Container;