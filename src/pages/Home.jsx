import React, { useEffect } from "react";
import CardSpec from "../components/CardSpec/CardSpec";
import Typed from "typed.js";

export default function Home({ phone, setPhone, mail, setMail }) {
    useEffect(() => {
        const s5 = document.querySelector(".s5");
        const s8 = document.querySelector(".s8");
        const c3 = document.querySelector(".c3");
        const c5 = document.querySelector(".c5");
        document.onmousemove = (e) => {
            let x = e.clientX / window.innerWidth;
            let y = e.clientY / window.innerHeight;

            s5.style.transform =
                "translate(-" + x * 20 + "px, -" + y * 20 + "px)";
            s8.style.transform =
                "translate(+" + x * 20 + "px, +" + y * 20 + "px)";
            c3.style.transform =
                "translate(-" + x * 20 + "px, -" + y * 20 + "px)";
            c5.style.transform =
                "translate(+" + x * 20 + "px, -" + y * 20 + "px)";
        };

        const observer = new IntersectionObserver((entries, options) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    var typed = new Typed(".s3_text", {
                        strings: ["Более 300 000 <br /> анкет в базе"],
                        typeSpeed: 60,
                        startDelay: 1500,
                        // backSpeed: 100,
                        backDelay: 5000,
                        fadeOut: true,
                        // loop: true,
                    });
                    var typed = new Typed(".s4_text", {
                        strings: [
                            "18519 работников<br /> мы вывели на объекты<br /> заказчиков",
                        ],
                        typeSpeed: 30,
                        startDelay: 2500,
                        // backSpeed: 100,
                        backDelay: 5000,
                        fadeOut: true,
                        // loop: true,
                    });
                    var typed = new Typed(".c8_text", {
                        strings: ["Мы отбираем для<br /> вас лучших!"],
                        typeSpeed: 60,
                        startDelay: 500,
                        // backSpeed: 100,
                        backDelay: 5000,
                        fadeOut: true,
                        // loop: true,
                    });
                }
            });
        });

        const scrolledEl = document.querySelectorAll(".scrolled");
        scrolledEl.forEach((el) => observer.observe(el));
    });
    return (
        <>
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
                            <form className="banner__form">
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
                                        <input
                                            name="radio"
                                            id="radio-1"
                                            type="radio"
                                        />
                                        <label
                                            htmlFor="radio-1"
                                            className="banner__specRadioGroup__btnLbl"
                                        >
                                            Кассир
                                        </label>
                                    </div>
                                    <div className="banner__specRadioGroup__btn">
                                        <input
                                            name="radio"
                                            id="radio-2"
                                            type="radio"
                                        />
                                        <label
                                            htmlFor="radio-2"
                                            className="banner__specRadioGroup__btnLbl"
                                        >
                                            Официант
                                        </label>
                                    </div>
                                    <div className="banner__specRadioGroup__btn">
                                        <input
                                            name="radio"
                                            id="radio-3"
                                            type="radio"
                                        />
                                        <label
                                            htmlFor="radio-3"
                                            className="banner__specRadioGroup__btnLbl"
                                        >
                                            Промоутер
                                        </label>
                                    </div>
                                    <div className="banner__specRadioGroup__btn">
                                        <input
                                            name="radio"
                                            id="radio-4"
                                            type="radio"
                                        />
                                        <label
                                            htmlFor="radio-4"
                                            className="banner__specRadioGroup__btnLbl"
                                        >
                                            Упаковщик
                                        </label>
                                    </div>
                                    <div className="banner__specRadioGroup__btn">
                                        <input
                                            name="radio"
                                            id="radio-5"
                                            type="radio"
                                        />
                                        <label
                                            htmlFor="radio-5"
                                            className="banner__specRadioGroup__btnLbl"
                                        >
                                            Продавец
                                        </label>
                                    </div>
                                    <div className="banner__specRadioGroup__btn">
                                        <input
                                            name="radio"
                                            id="radio-6"
                                            type="radio"
                                        />
                                        <label
                                            htmlFor="radio-6"
                                            className="banner__specRadioGroup__btnLbl"
                                        >
                                            Работник торгового зала
                                        </label>
                                    </div>
                                    <div className="banner__specRadioGroup__btn">
                                        <input
                                            name="radio"
                                            id="radio-7"
                                            type="radio"
                                        />
                                        <label
                                            htmlFor="radio-7"
                                            className="banner__specRadioGroup__btnLbl"
                                        >
                                            Сотрудник клининга
                                        </label>
                                    </div>
                                    <div className="banner__specRadioGroup__btn">
                                        <input
                                            name="radio"
                                            id="radio-8"
                                            type="radio"
                                        />
                                        <label
                                            htmlFor="radio-8"
                                            className="banner__specRadioGroup__btnLbl"
                                        >
                                            Горничная
                                        </label>
                                    </div>
                                    <div className="banner__specRadioGroup__btn">
                                        <input
                                            name="radio"
                                            id="radio-9"
                                            type="radio"
                                        />
                                        <label
                                            htmlFor="radio-9"
                                            className="banner__specRadioGroup__btnLbl"
                                        >
                                            Фасовщик
                                        </label>
                                    </div>
                                    <div className="banner__specRadioGroup__btn">
                                        <input
                                            name="radio"
                                            id="radio-10"
                                            type="radio"
                                        />
                                        <label
                                            htmlFor="radio-10"
                                            className="banner__specRadioGroup__btnLbl"
                                        >
                                            Мойщик
                                        </label>
                                    </div>
                                    <button
                                        type="button"
                                        className="banner__specRadioGroup__btnAllSpec"
                                    >
                                        Все специалисты
                                    </button>
                                </div>
                                <div className="banner__formBottom">
                                    <input
                                        className="banner__formBottom__inpTown"
                                        type="text"
                                        placeholder="Город"
                                        name=""
                                        id=""
                                    />
                                    <input
                                        className="banner__formBottom__inpCount"
                                        type="text"
                                        placeholder="Количество"
                                        name=""
                                        id=""
                                    />
                                    <button
                                        type="button"
                                        className="banner__formBottom__btnSend"
                                    >
                                        Отправить
                                    </button>
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
                            <b className="banner__imgAbs s3_text scrolled"></b>
                            <img
                                className="banner__imgAbs s4"
                                src="/img/bannerForm2.svg"
                                alt=""
                            />
                            <b className="banner__imgAbs s4_text scrolled"></b>
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
            <section className="section__specialists">
                <div className="container">
                    <div className="specialists-wrap">
                        <h5 className="specialists__title">Топ специалистов</h5>
                        <div className="specialists__cards">
                            <CardSpec
                                img={"/img/spec1.png"}
                                spec={"Кассир"}
                                subTitle={"< 1014 кассиров"}
                                text={
                                    "С 1998 года мы ежедневно выводим на объекты заказчиков тысячи кассиров. "
                                }
                            />
                            <CardSpec
                                img={"/img/spec2.png"}
                                spec={"Работник торгового зала"}
                                subTitle={"< 2598 сотрудников  "}
                                text={
                                    "Выходит на объекты наших клиентов каждый день"
                                }
                            />
                            <CardSpec
                                img={"/img/spec3.png"}
                                spec={"Грузчик"}
                                subTitle={"< 786 грузчиков  "}
                                text={
                                    "Выходит на объекты наших клиентов каждый день"
                                }
                            />
                            <CardSpec
                                img={"/img/spec4.png"}
                                spec={"Официант"}
                                subTitle={"~ 218 официантов  "}
                                text={
                                    "Выходит на объекты наших клиентов каждый день"
                                }
                            />
                            <CardSpec
                                img={"/img/spec5.png"}
                                spec={"Промоутер"}
                                subTitle={"subTitle"}
                                text={
                                    "Выходит на объекты наших клиентов каждый день"
                                }
                            />
                            <div className="specialists__cardMore">
                                <button className="specialists__cardMore__btn">
                                    Посмотреть все специальности
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section__clientInfo">
                <div className="container">
                    <div className="clientInfo-wrap">
                        <div className="clientInfo__img">
                            <img
                                className="clientInfo__imgAbs c1"
                                src="/img/clientInfoImgMain.png"
                                alt=""
                            />
                            <img
                                className="clientInfo__imgAbs c2"
                                src="/img/clientInfoGreenEllipse.svg"
                                alt=""
                            />
                            <img
                                className="clientInfo__imgAbs c3"
                                src="/img/clientInfoGreenEllipse_s.svg"
                                alt=""
                            />
                            <img
                                className="clientInfo__imgAbs c4"
                                src="/img/clientInfoHorLines.svg"
                                alt=""
                            />
                            <img
                                className="clientInfo__imgAbs c5"
                                src="/img/clientInfoOrangeEllipse_s.svg"
                                alt=""
                            />
                            <img
                                className="clientInfo__imgAbs c6"
                                src="/img/bannerHorDots.svg"
                                alt=""
                            />
                            <img
                                className="clientInfo__imgAbs c7"
                                src="/img/bannerVertDots.svg"
                                alt=""
                            />
                            <img
                                className="clientInfo__imgAbs c8"
                                src="/img/clientInfoForm.svg"
                                alt=""
                            />
                            <b className="clientInfo__imgAbs c8_text scrolled"></b>
                            <img
                                className="clientInfo__imgAbs c9"
                                src="/img/clientInfoFormDop.svg"
                                alt=""
                            />
                        </div>
                        <div className="clientInfo__content">
                            <h5 className="clientInfo__contentTitle">
                                Наши клиенты получают лучшие кадры на рынке!
                            </h5>
                            <ul className="clientInfo__contentList">
                                <li className="clientInfo__contentList__item">
                                    <span className="clientInfo__contentList__item_mark"></span>
                                    <p className="clientInfo__contentList__item_text">
                                        Только совершеннолетние граждане РФ
                                    </p>
                                </li>
                                <li className="clientInfo__contentList__item">
                                    <span className="clientInfo__contentList__item_mark"></span>
                                    <p className="clientInfo__contentList__item_text">
                                        Обязательная медкнижка
                                    </p>
                                </li>
                                <li className="clientInfo__contentList__item">
                                    <span className="clientInfo__contentList__item_mark"></span>
                                    <p className="clientInfo__contentList__item_text">
                                        Постоянные инструктажи по технике
                                        безопасности
                                    </p>
                                </li>
                                <li className="clientInfo__contentList__item">
                                    <span className="clientInfo__contentList__item_mark"></span>
                                    <p className="clientInfo__contentList__item_text">
                                        Присутствие супервайзера на заказах
                                    </p>
                                </li>
                                <li className="clientInfo__contentList__item">
                                    <span className="clientInfo__contentList__item_mark"></span>
                                    <p className="clientInfo__contentList__item_text">
                                        Собственная униформа
                                    </p>
                                </li>
                                <li className="clientInfo__contentList__item">
                                    <span className="clientInfo__contentList__item_mark"></span>
                                    <p className="clientInfo__contentList__item_text">
                                        Обязательное обучение в нашем учебном
                                        центре
                                    </p>
                                </li>
                                <li className="clientInfo__contentList__item">
                                    <span className="clientInfo__contentList__item_mark"></span>
                                    <p className="clientInfo__contentList__item_text">
                                        Полная материальная ответственность
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section__stats">
                <div className="container">
                    <div className="stats-wrap">
                        <div className="stats__left">
                            <h6 className="stats__leftTitle">
                                <span className="stats__leftTitle_marked">
                                    Почему
                                </span>{" "}
                                стоит использовать аутсорс?
                            </h6>
                            <ul className="stats__leftList">
                                <li className="stats__leftList__item">
                                    <span className="stats__leftList__itemNum">
                                        1
                                    </span>
                                    <p className="stats__leftList__itemText">
                                        Существенная экономия финансов на
                                        содержание штата сотрудников
                                    </p>
                                </li>
                                <li className="stats__leftList__item">
                                    <span className="stats__leftList__itemNum">
                                        2
                                    </span>
                                    <p className="stats__leftList__itemText">
                                        Существенная экономия времени на поиск и
                                        подбор персонала
                                    </p>
                                </li>
                                <li className="stats__leftList__item">
                                    <span className="stats__leftList__itemNum">
                                        3
                                    </span>
                                    <p className="stats__leftList__itemText">
                                        Рост эффективности основной деятельности
                                    </p>
                                </li>
                            </ul>
                            <button className="stats__leftBtn">
                                Использовать преимущества
                            </button>
                        </div>
                        <div className="stats__right">
                            <h6 className="stats__rightTitle">
                                <span className="stats__rightTitle_marked">
                                    Почему
                                </span>{" "}
                                стоит использовать аутсорс?
                            </h6>
                            <ul className="stats__rightList">
                                <li className="stats__rightList__item">
                                    <span className="stats__rightList__itemNum">
                                        17
                                    </span>
                                    <p className="stats__rightList__itemText">
                                        Лет на рынке. Мы работаем с 1998 года
                                    </p>
                                </li>
                                <li className="stats__rightList__item">
                                    <span className="stats__rightList__itemNum">
                                        54
                                    </span>
                                    <p className="stats__rightList__itemText">
                                        Города во всех регионах страны - охват
                                        нашей региональной сети
                                    </p>
                                </li>
                                <li className="stats__rightList__item">
                                    <span className="stats__rightList__itemNum">
                                        300
                                    </span>
                                    <p className="stats__rightList__itemText">
                                        Тысяч анкет в нашей базе. Мы подберем
                                        персонал для ваших нужд мгновенно!
                                    </p>
                                </li>
                            </ul>
                            <button className="stats__rightBtn">
                                Использовать преимущества
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section__partners">
                <div className="container">
                    <div className="partners-wrap">
                        <h6 className="partners__title">
                            У нас действительно крутые партнеры
                        </h6>
                        <div className="partners__cards">
                            <div className="partners__card">
                                <img src="/img/partner1.png" alt="" />
                            </div>
                            <div className="partners__card">
                                <img src="/img/partner2.png" alt="" />
                            </div>
                            <div className="partners__card">
                                <img src="/img/partner3.png" alt="" />
                            </div>
                            <div className="partners__card">
                                <img src="/img/partner4.png" alt="" />
                            </div>
                            <div className="partners__card">
                                <img src="/img/partner5.png" alt="" />
                            </div>
                            <div className="partners__card">
                                <img src="/img/partner6.png" alt="" />
                            </div>
                            <div className="partners__card">
                                <img src="/img/partner7.png" alt="" />
                            </div>
                            <div className="partners__card">
                                <img src="/img/partner8.png" alt="" />
                            </div>
                            <div className="partners__card">
                                <img src="/img/partner9.png" alt="" />
                            </div>
                            <div className="partners__card">
                                <img src="/img/partner10.png" alt="" />
                            </div>
                            <div className="partners__card">
                                <img src="/img/partner11.png" alt="" />
                            </div>
                            <div className="partners__card">
                                <img src="/img/partner12.png" alt="" />
                            </div>
                            <div className="partners__card">
                                <img src="/img/partner13.png" alt="" />
                            </div>
                            <div className="partners__card">
                                <img src="/img/partner14.png" alt="" />
                            </div>
                            <div className="partners__card">
                                <img src="/img/partner15.png" alt="" />
                            </div>
                            <div className="partners__card">
                                <img src="/img/partner16.png" alt="" />
                            </div>
                            <div className="partners__card">
                                <img src="/img/partner17.png" alt="" />
                            </div>
                            <div className="partners__card">
                                <img src="/img/partner18.png" alt="" />
                            </div>
                            <div className="partners__card">
                                <img src="/img/partner19.png" alt="" />
                            </div>
                            <div className="partners__card">
                                <img src="/img/partner20.png" alt="" />
                            </div>
                        </div>
                        <p className="partners__text">
                            И еще{" "}
                            <span className="partners__text_marked">276</span>{" "}
                            лучших компаний страны. Присоединяйтесь!
                        </p>
                    </div>
                </div>
            </section>
            <section className="section__coop">
                <div className="container">
                    <div className="coop-wrap">
                        <h6 className="coop__title">Схема сотрудничества</h6>
                        <div className="coop__content">
                            <div className="coop__leftCards">
                                <div className="coop_card card1">
                                    <img
                                        className="coop_cardImg"
                                        src="/img/coop1.svg"
                                        alt=""
                                    />
                                    <p className="coop_cardText">
                                        Заполните форму обратной связи, наши
                                        менеджеры свяжутся с вами для уточнения
                                        деталей.
                                    </p>
                                    <img
                                        className="coop_cardBackImg"
                                        src="/img/coopLightGrayEllipse.svg"
                                        alt=""
                                    />
                                </div>
                                <div className="coop_card card2">
                                    <img
                                        className="coop_cardImg"
                                        src="/img/coop2.svg"
                                        alt=""
                                    />
                                    <p className="coop_cardText">
                                        Мы обработаем вашу заявку. За вами будет
                                        закреплен персональный сотрудник,
                                        который подготовит пакет документов
                                    </p>
                                    <img
                                        className="coop_cardBackImg"
                                        src="/img/coopLightGrayEllipse.svg"
                                        alt=""
                                    />
                                </div>
                                <div className="coop_card card3">
                                    <img
                                        className="coop_cardImg"
                                        src="/img/coop3.svg"
                                        alt=""
                                    />
                                    <p className="coop_cardText">
                                        После заключения договора, наши
                                        сотрудники под нашим контролем
                                        отправятся на ваш объект
                                    </p>
                                    <img
                                        className="coop_cardBackImg"
                                        src="/img/coopLightGrayEllipse.svg"
                                        alt=""
                                    />
                                </div>
                                <div className="coop_card card4">
                                    <img
                                        className="coop_cardImg"
                                        src="/img/coop4.svg"
                                        alt=""
                                    />
                                    <p className="coop_cardText">
                                        Развивайте свой бизнес не отвлекаясь на
                                        рутину по подбору и контролю персонала
                                    </p>
                                    <img
                                        className="coop_cardBackImg"
                                        src="/img/coopLightGrayEllipse.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="coop__img">
                                <img
                                    className="coop__imgAbs e1"
                                    src="/img/coopEllipsMain.svg"
                                    alt=""
                                />
                                <img
                                    className="coop__imgAbs e2"
                                    src="/img/coopImgMain.png"
                                    alt=""
                                />
                                <img
                                    className="coop__imgAbs e3"
                                    src="/img/coopGrayEllipse.svg"
                                    alt=""
                                />
                                <img
                                    className="coop__imgAbs e4"
                                    src="/img/coopGrayEllipse.svg"
                                    alt=""
                                />
                                <img
                                    className="coop__imgAbs e5"
                                    src="/img/coopGrayEllipse.svg"
                                    alt=""
                                />
                                <img
                                    className="coop__imgAbs e6"
                                    src="/img/bannerHorDots.svg"
                                    alt=""
                                />
                                <img
                                    className="coop__imgAbs e7"
                                    src="/img/coopVertDots.svg"
                                    alt=""
                                />
                                <button className="coop__imgAbs coop__imgBtn e8">
                                    Заполнить заявку
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
