import { useEffect, useState } from "react";
import Container from "./Component/Container";
import { CurrentDayNameProvider } from "./Context/CurrentDayNameContext";
import { CurrentLocationProvider } from './Context/CurrentLocationContext';
import { CurrentWeatherProvider } from "./Context/CurrentWeatherContext";

function App() {
  return (
    <CurrentLocationProvider>
      <CurrentWeatherProvider>
        <CurrentDayNameProvider>
        <Container />
        </CurrentDayNameProvider>
      </CurrentWeatherProvider>
    </CurrentLocationProvider>
  )
}

export default App;
