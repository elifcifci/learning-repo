import {useContext} from 'react'
import Header from '../Header';
import Filter from '../Filter';
import Cards from '../Cards';
import Location from '../Cards/location';
import style from './style.module.css'

function Container() {

  return (
    <div className={style.container}>
      <Location/>
      <Header />
      <Filter />
      <Cards />
    </div>
  );
}

export default Container;