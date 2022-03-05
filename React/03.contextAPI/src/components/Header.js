import { useTheme } from '../context/ThemeContext';

function Header() {
    const { theme, setTheme } = useTheme();

    return (<div>
        <h3>Header Component</h3>
        <div> Active theme: {theme}</div>
        <br />
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>

    </div>)
}
export default Header;
