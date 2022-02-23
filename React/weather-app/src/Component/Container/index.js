import { useContext } from 'react'
import Header from '../Header';
import Filter from '../Filter';
import Cards from '../Cards';
import style from './style.module.css'

function Container() {

  return (
    <div className={style.container}>
      <Header />
      <Filter />
      <Cards />
    </div>
  );
}

export default Container;