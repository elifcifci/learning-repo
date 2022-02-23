import { useEffect, useState } from "react";
import Container from "./Component/Container";
import { CurrentLocationProvider } from './Context/CurrentLocationContext';
import { WeatherProvider } from "./Context/WeatherContext";
import { FindCityProvider } from "./Context/FindCityContext"

function App() {
  return (
    <CurrentLocationProvider>
      <FindCityProvider>
        <WeatherProvider>
            <Container />
        </WeatherProvider>
      </FindCityProvider>
    </CurrentLocationProvider>
  )
}

export default App;
