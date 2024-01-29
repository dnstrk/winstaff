import {useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import TownOverlay from "./components/TownOverlay/TownOverlay";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import About from "./pages/About";

function App() {
  const [currentTown, setCurrentTown] = useState("Москва");
  const [townSearchValue, setTownSearchValue] = useState("");
  const [townOverlay, setTownOverlay] = useState(false);

  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");

 
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
      <Routes>
        <Route
          path="/"
          element={
            <Home
              phone={phone}
              setPhone={setPhone}
              mail={mail}
              setMail={setMail}
            />
          }
        />
        <Route path="about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
