import React, { useS, useState } from 'react'
import { cities } from "../../constans"
import style from './style.module.css'

function Filter() {

    function listele() {
        return cities.map((city) =>
            (<option key={city} className={style.filter} value={city}>{city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()}</option>)
        )
    }

    return (
        <div>
            <select className={style.cardHeader}>
                <option className={style.filter} value={""}>{"Select City"}</option>
                {listele()}
            </select>
            <br /><br />
        </div>
    )
}

export default Filter;
