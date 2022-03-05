import { useTheme } from '../context/ThemeContext';
import Profile from './Profile';
import Header from './Header';
import Button from './Button';
import "../app.css"

function Container() {
    const { theme } = useTheme();

    return (
        <div className={theme === "dark" ? "dark-theme" : ""}>
            <Header />
            <hr />
            <Button />
            <hr />
            <Profile />
        </div>
    )
}

export default Container;