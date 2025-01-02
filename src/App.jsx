import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

function App() {
  const [isgameStarted, setGameStarted] = useState(false);
  const toggleGamePlay = () => {
    setGameStarted((prev) => !prev);
  };
  return (
    <>{isgameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
}

export default App;
