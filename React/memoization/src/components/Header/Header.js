import React from 'react'
import style from './style.module.css'

function Header({ number }) {
    return (
        <div>
            <h1>HEADER: {number > 5 ? number : <div className={style.warning}> Number is not bigger than 5. </div>}</h1>
            {console.log("Header component re-rendered!")}
            <hr />
        </div>

    )
}

export default React.memo(Header);