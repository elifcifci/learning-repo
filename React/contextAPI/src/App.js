import Button from './components/Button';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import "./app.css"

function App() {
  return (
    <ThemeProvider>
      <Header/>
      <hr/>
      <Button />
    </ThemeProvider>
  );
}

export default App;
