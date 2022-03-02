import "./App.css";
import { ChatProvider } from "./context/ChatContext";
import Container from "./components/Container";
import { useEffect } from "react";
import { init } from "./socketApi";

function App() {
  useEffect(() => {
    init();
  }, []);

  return (
    <div className="App">
      <ChatProvider>
        <Container />
      </ChatProvider>
    </div>
  );
}

export default App;
