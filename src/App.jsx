import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import TownOverlay from "./components/TownOverlay/TownOverlay";
import Typed from "typed.js";

function App() {
    const [currentTown, setCurrentTown] = useState("Москва");
    const [townSearchValue, setTownSearchValue] = useState("");
    const [townOverlay, setTownOverlay] = useState(false);

    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");

    useEffect(() => {
        console.log(document.body.classList.toggle("disable"));
    }, [townOverlay]);

    useEffect(() => {
        const s5 = document.querySelector(".s5");
        const s8 = document.querySelector(".s8");
        document.onmousemove = (e) => {
            let x = e.clientX / window.innerWidth;
            let y = e.clientY / window.innerHeight;

            s5.style.transform =
                "translate(-" + x * 20 + "px, -" + y * 20 + "px)";
            s8.style.transform =
                "translate(+" + x * 20 + "px, +" + y * 20 + "px)";
        };
    });

    useEffect(() => {
        var typed = new Typed(".s3_text", {
            strings: ["Более 300 000 <br /> анкет в базе"],
            typeSpeed: 60,
            // backSpeed: 100,
            // backDelay: 5000,
            // fadeOut: true,
            // loop: true,
        });
    });

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
                                Лидер на рынке аутсорсинга временного персонала.{" "}
                                <br /> Более <b>54 отделений</b> в нашей
                                региональной сети.
                            </p>
                            <form action="" className="banner__form">
                                <div className="banner__actionInp">
                                    <input
                                        className="banner__actionInp__num"
                                        type="text"
                                        value={phone}
                                        onChange={(e) =>
                                            setPhone(e.target.value)
                                        }
                                        placeholder="Ваш телефон"
                                    />
                                    <input
                                        className="banner__actionInp__email"
                                        type="text"
                                        value={mail}
                                        onChange={(e) =>
                                            setMail(e.target.value)
                                        }
                                        placeholder="Ваш e-mail"
                                    />
                                </div>
                                <p className="banner__specText">
                                    Выберите специалиста
                                </p>
                                <div className="banner__specRadioGroup">
                                    <div className="banner__specRadioGroup__btn">
                                        <label className="banner__specRadioGroup__btnLbl">
                                            <input
                                                className="banner__specRadioGroup__btnInp"
                                                type="radio"
                                            />
                                            Кассир
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="banner__img">
                            <img
                                className="banner__imgAbs s1"
                                src="/img/bannerImgMain.png"
                                alt=""
                            />
                            <img
                                className="banner__imgAbs s2"
                                src="/img/bannerOrangeEllipse.svg"
                                alt=""
                            />
                            <img
                                className="banner__imgAbs s3"
                                src="/img/bannerForm1.svg"
                                alt=""
                            />
                            <img
                                className="banner__imgAbs s3_1"
                                src="/img/bannerForm1dop.svg"
                                alt=""
                            />
                            <b className="banner__imgAbs s3_text"></b>
                            <img
                                className="banner__imgAbs s4"
                                src="/img/bannerForm2.svg"
                                alt=""
                            />
                            <img
                                className="banner__imgAbs s5"
                                src="/img/bannerLightOrangeEllipse.svg"
                                alt=""
                            />
                            <img
                                className="banner__imgAbs s6"
                                src="/img/bannerHorDots.svg"
                                alt=""
                            />
                            <img
                                className="banner__imgAbs s7"
                                src="/img/bannerVertDots.svg"
                                alt=""
                            />
                            <img
                                className="banner__imgAbs s8"
                                src="/img/bannerGreenEllipse.svg"
                                alt=""
                            />
                            <img
                                className="banner__imgAbs s9"
                                src="/img/bannerHorLines.svg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
            <div className="test">a</div>
        </div>
    );
}

export default App;
