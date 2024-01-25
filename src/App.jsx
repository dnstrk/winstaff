import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import TownOverlay from "./components/TownOverlay/TownOverlay";
import Typed from "typed.js";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import { Route, Router, Routes } from "react-router";
import About from "./pages/About";

function App() {
    const [currentTown, setCurrentTown] = useState("Москва");
    const [townSearchValue, setTownSearchValue] = useState("");
    const [townOverlay, setTownOverlay] = useState(false);

    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");

    // useEffect(() => {
    //     document.body.classList.toggle("disable");
    // }, [townOverlay]);

    useEffect(() => {
        // const observer = new IntersectionObserver((entries, options) => {
        //     entries.forEach((entry) => {
        //         if (entry.isIntersecting) {
        //             var typed = new Typed(".s3_text", {
        //                 strings: ["Более 300 000 <br /> анкет в базе"],
        //                 typeSpeed: 60,
        //                 // backSpeed: 100,
        //                 backDelay: 5000,
        //                 fadeOut: true,
        //                 // loop: true,
        //             });
        //             var typed = new Typed(".s4_text", {
        //                 strings: [
        //                     "18519 работников<br /> мы вывели на объекты<br /> заказчиков",
        //                 ],
        //                 typeSpeed: 30,
        //                 startDelay: 2500,
        //                 // backSpeed: 100,
        //                 backDelay: 5000,
        //                 fadeOut: true,
        //                 // loop: true,
        //             });
        //             var typed = new Typed(".c8_text", {
        //                 strings: ["Мы отбираем для<br /> вас лучших!"],
        //                 typeSpeed: 60,
        //                 startDelay: 1500,
        //                 // backSpeed: 100,
        //                 backDelay: 5000,
        //                 fadeOut: true,
        //                 // loop: true,
        //             });
        //         }
        //     });
        // });
        // const scrolledEl = document.querySelectorAll(".scrolled");
        // scrolledEl.forEach((el) => observer.observe(el));
        // window.addEventListener("load", () => {
        // var typed = new Typed(".s3_text", {
        //     strings: ["Более 300 000 <br /> анкет в базе"],
        //     typeSpeed: 60,
        //     // backSpeed: 100,
        //     // backDelay: 5000,
        //     // fadeOut: true,
        //     // loop: true,
        // });
        // var typed = new Typed(".s4_text", {
        //     strings: [
        //         "18519 работников<br /> мы вывели на объекты<br /> заказчиков",
        //     ],
        //     typeSpeed: 25,
        //     startDelay: 2500,
        //     // backSpeed: 100,
        //     // backDelay: 5000,
        //     // fadeOut: true,
        //     // loop: true,
        // });
        // });
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
