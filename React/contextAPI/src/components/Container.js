import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext';
import Header from './Header';
import Button from './Button';
import "../app.css"

function Container() {
    const {theme} = useContext(ThemeContext)

    return (
        <div className={theme === "dark" && "dark-theme"}>
            <Header />
            <hr />
            <Button />
        </div>
    )
}

export default Container;