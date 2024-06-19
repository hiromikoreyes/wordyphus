import { useState } from "react";
import "./App.css";
import TitleScreen from "./pages/TitleScreen";
import GameScreen from "./pages/GameScreen"

function App() {
  const [page, setPage] = useState("TitleScreen");

  return (
    <>
      {page==="TitleScreen" && (<TitleScreen setPage={setPage}/>)}
      {page==="GameScreen" && (<GameScreen setPage={setPage}/>)}
    </>
  );
}

export default App;
