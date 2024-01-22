import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import TownOverlay from "./components/TownOverlay/TownOverlay";

function App() {
  const [currentTown, setCurrentTown] = useState("Москва");
  const [townSearchValue, setTownSearchValue] = useState("");
  const [townOverlay, setTownOverlay] = useState(false);

  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");

  useEffect(() => {
    console.log(document.body.classList.toggle('disable'));
  }, [townOverlay]);

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
      <section className="section__banner">
        <div className="container">
          <div className="banner-wrap">
            <div className="banner__info">
              <h2 className="banner__infoTitle">
                <span className="banner__infoTitle_marked">
                  Поиск персонала
                </span>
                <br />
                на короткий срок
              </h2>
              <p className="banner__infoText">
                Лидер на рынке аутсорсинга временного персонала. <br /> Более{" "}
                <b>54 отделений</b> в нашей региональной сети.
              </p>
              <div className="banner__actionInp">
                <input
                  className="banner__actionInp__num"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ваш телефон"
                />
                <input
                  className="banner__actionInp__email"
                  type="text"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  placeholder="Ваш e-mail"
                />
              </div>
            </div>
            <img
              className="banner__img"
              width={653}
              height={630}
              src="/img/bannerPerson.svg"
              alt=""
            />
          </div>
        </div>
      </section>
      <div className="test">a</div>
    </div>
  );
}

export default App;
