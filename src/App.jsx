import { createContext, useContext, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import TownOverlay from "./components/TownOverlay/TownOverlay";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import About from "./pages/About";
import Spec from "./pages/Spec";
import RequestOverlay from "./components/RequestOverlay/RequestOverlay";
import UserContext from "./UserContext";

function App() {
  const [alert, setAlert] = useState(false); //алерт при незаполненном поле

  const [currentTown, setCurrentTown] = useState("Москва");
  const [townSearchValue, setTownSearchValue] = useState("");
  const [townOverlay, setTownOverlay] = useState(false); //статус оверлея выбора города
  const [requestOverlay, setRequestOverlay] = useState(false); //статус оверлея заявки

  const [selectedSpec, setSelectedSpec] = useState("");

  const [phoneRequest, setPhoneRequest] = useState("");
  const [mailRequest, setMailRequest] = useState("");
  const [townRequest, setTownRequest] = useState("");
  const [countRequest, setCountRequest] = useState("");

  const [phoneBanner, setPhoneBanner] = useState("");
  const [mailBanner, setMailBanner] = useState("");
  const [townBanner, setTownBanner] = useState("");
  const [countBanner, setCountBanner] = useState("");

  const [requests, setRequests] = useState([]);

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

  console.log(requests)

  return (
    <div className="App">
      <UserContext.Provider
        value={{
          requests,
          setRequests,
          selectedSpec,
          setSelectedSpec,
          alert,
          setAlert,
        }}
      >
        <Header
          currentTown={currentTown}
          setTownOverlay={setTownOverlay}
          setRequestOverlay={setRequestOverlay}
        />
        <TownOverlay //оверлей выбора города
          currentTown={currentTown}
          setCurrentTown={setCurrentTown}
          towns={towns}
          townOverlay={townOverlay}
          setTownOverlay={setTownOverlay}
          townSearchValue={townSearchValue}
          setTownSearchValue={setTownSearchValue}
        />
        <RequestOverlay //оверлей заявки на персонал
          requestOverlay={requestOverlay}
          setRequestOverlay={setRequestOverlay}
          phoneRequest={phoneRequest}
          setPhoneRequest={setPhoneRequest}
          mailRequest={mailRequest}
          setMailRequest={setMailRequest}
          townRequest={townRequest}
          setTownRequest={setTownRequest}
          countRequest={countRequest}
          setCountRequest={setCountRequest}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                phoneBanner={phoneBanner}
                setPhoneBanner={setPhoneBanner}
                mailBanner={mailBanner}
                setMailBanner={setMailBanner}
                townBanner={townBanner}
                setTownBanner={setTownBanner}
                countBanner={countBanner}
                setCountBanner={setCountBanner}
              />
            }
          />
          <Route path="about" element={<About />} />
          <Route path="specialties" element={<Spec />} />
        </Routes>

        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
