import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import TownOverlay from "./components/TownOverlay/TownOverlay";

function App() {
  const [currentTown, setCurrentTown] = useState("Москва");
  const [townSearchValue, setTownSearchValue] = useState("");
  const [townOverlay, setTownOverlay] = useState(false);

  const towns = [
    "Абакан",
    "Барнаул",
    "Волгоград",
    "Геленджик",
    "Дзержинск",
    "Елабуга",
    "Екатеринбург",
    "Железнодорожный",
    "Москва",
    "Санкт-Петербург",
  ];

  return (
    <div className="App">
      <Header currentTown={currentTown} setTownOverlay={setTownOverlay} />
      <TownOverlay
        currentTown={currentTown}
        setCurrentTown={setCurrentTown}
        towns={towns}
        townOverlay={townOverlay}
        setTownOverlay={setTownOverlay}
        townSearchValue={townSearchValue}
        setTownSearchValue={setTownSearchValue}
      />
    </div>
  );
}

export default App;
