import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext';

function Button() {
  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <div>
     <div> Active theme: {theme}</div>
      <button onClick={() => setTheme(theme === "Light" ? "Dark" : "Light")}>Change Theme</button>
    </div>
  )
}

export default Button;