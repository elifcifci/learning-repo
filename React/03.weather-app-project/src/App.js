import Container from "./Component/Container";
import { WeatherProvider } from "./Context/WeatherContext";
import { DateProvider } from "./Context/DateContext";

function App() {
  return (
    <WeatherProvider>
      <DateProvider>
        <Container />
      </DateProvider>
    </WeatherProvider>
  );
}

export default App;
