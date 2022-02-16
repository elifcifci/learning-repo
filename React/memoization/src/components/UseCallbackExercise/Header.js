import React from 'react'
import style from './style.module.css'

function Header({ increment }) {
    return (
        <div>
            <h1>HEADER:</h1>
            <span className={style.warning}>Used useCallback. Header component will not re-render again.</span>
            {console.log("Header component re-rendered!")}
            <br /><br />
            <button onClick={increment}>Click</button>
            <hr />
        </div>

    )
}

export default React.memo(Header);