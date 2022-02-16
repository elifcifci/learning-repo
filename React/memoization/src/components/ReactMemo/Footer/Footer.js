import React from 'react'
import style from './style.module.css'

function Footer() {
    return (
        <div>
            <hr />
            <h1>Footer:</h1>
            <div className={style.warning}>Used React.memo. Footer component will not re-render again.</div>
            {console.log("Footer component will not re-render again.")}
        </div>
    )
}

export default React.memo(Footer);