import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext';

function Button() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <h3>Button Component</h3>
      <div> Active theme: {theme}</div>
      <br/>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>
    </div>
  )
}

export default Button;