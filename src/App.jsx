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
            <section className="section__banner">
                <div className="container">
                    <div className="banner-wrap">
                        <div className="banner__info">
                            <h2 className="banner__infoTitle">
                                <span className="banner__infoTitle_marked">
                                    Поиск персонала
                                </span><br />
                                на короткий срок
                            </h2>
                            <p className="banner__infoText"></p>
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
        </div>
    );
}

export default App;
