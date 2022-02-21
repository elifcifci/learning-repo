import { useEffect, useState } from "react";
import Container from "./Component/Container";
import { CurrentLocationProvider } from './Context/CurrentLocationContext';

function App() {
  return (
    <CurrentLocationProvider>
      <Container />
    </CurrentLocationProvider>
  )
}

export default App;
