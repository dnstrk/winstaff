import React, { useContext, useEffect, useState } from "react";
import CardSpec from "../components/CardSpec/CardSpec";
import MapInteractive from "../components/MapInteractive/MapInteractive";
import RadioSpec from "../components/RadioSpec/RadioSpec";
import UserContext from "../UserContext";
import { Link } from "react-router-dom";
import IMask from "imask";
import officeData from "../offises.json";

export default function Home() {
  const {
    moveTop,
    requests,
    setRequests,
    selectedSpec,
    setSelectedSpec,
    phoneBanner,
    setPhoneBanner,
    mailBanner,
    setMailBanner,
    townBanner,
    setTownBanner,
    countBanner,
    setCountBanner,
    setRequestAccept,
    setRequestOverlay,
    phoneValid,
    mailValid,
    townValid,
    countValid,
    phoneValidation,
    phoneValidationMarker,
    countValidation,
    countValidationMarker,
    emailValidation,
    emailValidationMarker,
    townValidation,
    townValidationMarker,

    sendRequestForm,
  } = useContext(UserContext);
  //выбранный path на карте
  const [path, setPath] = useState();

  //тест dropdown
  const [dropMap, setDropMap] = useState(false);
  const [regions, setRegions] = useState([]);
  const [regionFilter, setRegionFilter] = useState("");

  //< динамически меняющиеся регионы
  const [region, setRegion] = useState("Выберите регион");
  const [regionMedia, setRegionMedia] = useState("Выберите регион");
  //>

  //< отображение офисов у карты
  const [officesAddr, setOfficesAddr] = useState([]);
  const [officesAddrMedia, setOfficesAddrMedia] = useState([]);
  //>

  //< закрытие окна с адресами офисов
  function closeOfficesInfo() {
    setOfficesAddr([]);
    path.classList.remove("rf-clickMarked");
  }

  //< паралакс для кружков
  useEffect(() => {
    const s5 = document.querySelector(".s5");
    const s8 = document.querySelector(".s8");
    const c3 = document.querySelector(".c3");
    const c5 = document.querySelector(".c5");

    document.onmousemove = (e) => {
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;

      s5.style.transform = "translate(-" + x * 20 + "px, -" + y * 20 + "px)";
      s8.style.transform = "translate(+" + x * 20 + "px, +" + y * 20 + "px)";
      c3.style.transform = "translate(-" + x * 20 + "px, -" + y * 20 + "px)";
      c5.style.transform = "translate(+" + x * 20 + "px, -" + y * 20 + "px)";
    };

    const observer = new IntersectionObserver((entries, options) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // var typed = new Typed(".s3_text", {
          //   strings: ["Более 300 000 <br /> анкет в базе"],
          //   typeSpeed: 60,
          //   startDelay: 1500,
          //   // backSpeed: 100,
          //   backDelay: 5000,
          //   fadeOut: true,
          //   // loop: true,
          // });
          // var typed = new Typed(".s4_text", {
          //   strings: [
          //     "18519 работников<br /> мы вывели на объекты<br /> заказчиков",
          //   ],
          //   typeSpeed: 30,
          //   startDelay: 2500,
          //   // backSpeed: 100,
          //   backDelay: 5000,
          //   fadeOut: true,
          //   // loop: true,
          // });
          // var typed = new Typed(".c8_text", {
          //   strings: ["Мы отбираем для<br /> вас лучших!"],
          //   typeSpeed: 60,
          //   startDelay: 500,
          //   // backSpeed: 100,
          //   backDelay: 5000,
          //   fadeOut: true,
          //   // loop: true,
          // });
        } else if (!entry.isIntersecting) {
          entry.target.classList.remove("visible");
        }
      });
    });

    const scrolledEl = document.querySelectorAll(".scrolled");
    scrolledEl.forEach((el) => observer.observe(el));
  });
  //>

  //только числовой ввод в countBanner и текстовый в townBanner
  useEffect(() => {
    const inpCountBanner = document.querySelector(
      ".banner__formBottom__inpCount"
    );

    inpCountBanner.addEventListener("keydown", (event) => {
      if (
        event.keyCode == 46 ||
        event.keyCode == 8 ||
        event.keyCode == 9 ||
        event.keyCode == 27 ||
        // Разрешаем: Ctrl+A
        (event.keyCode == 65 && event.ctrlKey === true) ||
        // Разрешаем: home, end, влево, вправо
        (event.keyCode >= 35 && event.keyCode <= 39)
      ) {
        // Ничего не делаем
        return;
      } else {
        // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
        if (
          (event.keyCode < 48 || event.keyCode > 57) &&
          (event.keyCode < 96 || event.keyCode > 105)
        ) {
          event.preventDefault();
        }
      }
    });

    const inpTownBanner = document.querySelector(
      ".banner__formBottom__inpTown"
    );
    inpTownBanner.addEventListener("keydown", (event) => {
      if (
        (event.keyCode > 48 && event.keyCode < 57) ||
        (event.keyCode > 96 && event.keyCode < 105)
      ) {
        event.preventDefault();
      }
    });
  });

  //маска телефона и почты
  useEffect(() => {
    const inpPhone = document.getElementById("inpPhoneB");
    inpPhone.addEventListener("input", () => {
      if (phoneBanner.length < 17) {
        inpPhone.style.borderColor = "red";
      } else {
        inpPhone.style.borderColor = "green";
      }
    });
    let maskOption = {
      mask: "+{7} (000) 000-00-00",
    };
    IMask(inpPhone, maskOption);

    const inpEmail = document.getElementById("inpEmailB");
    inpEmail.addEventListener("input", onInput);

    const EMAIL_REGEXP =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    function onInput() {
      if (isEmailValid(inpEmail.value)) {
        inpEmail.style.borderColor = "green";
      } else {
        inpEmail.style.borderColor = "red";
      }
    }

    function isEmailValid(value) {
      return EMAIL_REGEXP.test(value);
    }

    const inpTown = document.getElementById("inpTownB");
    inpTown.addEventListener("input", () => {
      if (inpTown.length == 0) {
        inpTown.style.borderColor = "red";
      } else {
        inpTown.style.borderColor = "green";
      }
    });

    const inpCount = document.getElementById("inpCountB");
    inpCount.addEventListener("input", () => {
      if (inpCount.length == 0 || Number(inpCount) == 0) {
        inpCount.style.borderColor = "red";
      } else {
        inpCount.style.borderColor = "green";
      }
    });
  });

  // вывод регионов с удалением дублей
  useEffect(() => {
    const regionsPaths = document.querySelectorAll("[data-title]");
    const newregionsPaths = new Set(regionsPaths);
    newregionsPaths.forEach((reg) =>
      setRegions((prev) => [...prev, reg.dataset.title])
    );
  }, []);

  const officesData = officeData["Города"]["Город"];
  const officesPropVal = officesData.map((off) => off.ЗначенияСвойства);

  useEffect(() => {
    setOfficesAddrMedia([]); //очистка адресов прошлого региона

    for (var i = 0; i < officesPropVal.length; i++) {
      // проверка на то, что data-title включает в себя значение jsona с ИД UF_REGION_DADATA
      if (regionMedia.includes(officesPropVal[i][7].Значение)) {
        if (officesPropVal[i][1].Значение.length > 0) {
          const addr = officesPropVal[i][1].Значение; //сохранение значения из json с ИД UF_ADDRESS_TITLE
          setOfficesAddrMedia((prev) => [...prev, addr]); // запись всех адресов
        }
      }
    }
  }, [regionMedia]);

  return (
    <>
      <section className={`section__banner ${moveTop && "moveTop"}`}>
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
                Лидер на рынке аутсорсинга временного персонала. Более{" "}
                <b>54 отделений</b> в нашей региональной сети.
              </p>
              <form className="banner__form">
                <div className="banner__actionInp">
                  <input
                    className="banner__actionInp__num"
                    name="inpPhoneB"
                    id="inpPhoneB"
                    type="text"
                    value={phoneBanner}
                    onBlur={() => {
                      phoneValidation(phoneBanner);
                      phoneValidationMarker("inpPhoneB", phoneBanner);
                    }}
                    onChange={(e) => setPhoneBanner(e.target.value)}
                    placeholder="Ваш телефон"
                  />
                  <input
                    className="banner__actionInp__email"
                    name="inpEmailB"
                    id="inpEmailB"
                    type="text"
                    value={mailBanner}
                    onBlur={() => emailValidation(mailBanner)}
                    onChange={(e) => setMailBanner(e.target.value)}
                    placeholder="Ваш e-mail"
                  />
                </div>
                <p className="banner__specText">Выберите специалиста</p>
                <div className="banner__specRadioGroup">
                  <RadioSpec radio={1} specialisation="Кассир" />
                  <RadioSpec radio={2} specialisation="Официант" />
                  <RadioSpec radio={3} specialisation="Промоутер" />
                  <RadioSpec radio={4} specialisation="Упаковщик" />
                  <RadioSpec radio={5} specialisation="Продавец" />
                  <RadioSpec
                    radio={6}
                    specialisation="Работник торгового зала"
                  />
                  <RadioSpec radio={7} specialisation="Сотрудник клининга" />
                  <RadioSpec radio={8} specialisation="Горничная" />
                  <RadioSpec radio={9} specialisation="Фасовщик" />
                  <RadioSpec radio={10} specialisation="Мойщик" />
                  <Link
                    to="/specialties"
                    className="banner__specRadioGroup__btnAllSpec"
                  >
                    Все специалисты
                  </Link>
                </div>
                <div className="banner__formBottom">
                  <input
                    className="banner__formBottom__inpTown"
                    type="text"
                    name="inpTownB"
                    id="inpTownB"
                    value={townBanner}
                    // onBlur={(e) => townValidation(townBanner)}
                    onBlur={(e) => {
                      townValidation(townBanner);
                      if (townBanner.length > 0) {
                        townValidationMarker(e.target.id, townBanner);
                      }
                    }}
                    onChange={(e) => setTownBanner(e.target.value)}
                    placeholder="Город"
                  />
                  <input
                    className="banner__formBottom__inpCount"
                    type="text"
                    name="inpCountB"
                    id="inpCountB"
                    value={countBanner}
                    onBlur={(e) => {
                      countValidation(countBanner);
                      if (countBanner.length > 0) {
                        countValidationMarker(e.target.id, countBanner);
                      }
                    }}
                    onChange={(e) => setCountBanner(e.target.value)}
                    placeholder="Количество"
                  />
                  <button
                    // onClick={clickHandler}
                    onClick={() =>
                      sendRequestForm(
                        "http://uldalex.beget.tech/send.php",
                        phoneBanner,
                        mailBanner,
                        selectedSpec,
                        townBanner,
                        countBanner,
                        "B",
                        setPhoneBanner,
                        setMailBanner,
                        setSelectedSpec,
                        setTownBanner,
                        setCountBanner
                      )
                    }
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
              <b className="banner__imgAbs s3_text scrolled">
                Более 300 000 <br /> анкет в базе
              </b>
              <img
                className="banner__imgAbs s4"
                src="/img/bannerForm2.svg"
                alt=""
              />
              <b className="banner__imgAbs s4_text scrolled">
                18519 работников
                <br /> мы вывели на объекты
                <br /> заказчиков
              </b>
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
                home
                img={"/img/Кассир.svg"}
                spec={"Кассир"}
                subTitle={"< 1014 кассиров"}
                text={
                  "С 1998 года мы ежедневно выводим на объекты заказчиков тысячи кассиров. "
                }
              />
              <CardSpec
                home
                img={"/img/Работникторговогозала.svg"}
                spec={"Работник торгового зала"}
                subTitle={"< 2598 сотрудников  "}
                text={"Выходит на объекты наших клиентов каждый день"}
              />
              <CardSpec
                home
                img={"/img/Грузчик.svg"}
                spec={"Грузчик"}
                subTitle={"< 786 грузчиков  "}
                text={"Выходит на объекты наших клиентов каждый день"}
              />
              <CardSpec
                home
                img={"/img/Официант.svg"}
                spec={"Официант"}
                subTitle={"~ 218 официантов  "}
                text={"Выходит на объекты наших клиентов каждый день"}
              />
              <CardSpec
                home
                img={"/img/Промоутер.svg"}
                spec={"Промоутер"}
                subTitle={"~ 115 промоутеров"}
                text={"Выходит на объекты наших клиентов каждый день"}
              />
              <div className="specialists__cardMore">
                <Link to="/specialties" className="specialists__cardMore__btn">
                  Посмотреть все специальности
                </Link>
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
              <b className="clientInfo__imgAbs c8_text scrolled">
                Мы отбираем для
                <br /> вас лучших!
              </b>
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
                    Постоянные инструктажи по технике безопасности
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
                    Обязательное обучение в нашем учебном центре
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
                <span className="stats__leftTitle_marked">Почему</span> стоит
                использовать аутсорс?
              </h6>
              <ul className="stats__leftList">
                <li className="stats__leftList__item">
                  <span className="stats__leftList__itemNum">1</span>
                  <p className="stats__leftList__itemText">
                    Существенная экономия финансов на содержание штата
                    сотрудников
                  </p>
                </li>
                <li className="stats__leftList__item">
                  <span className="stats__leftList__itemNum">2</span>
                  <p className="stats__leftList__itemText">
                    Существенная экономия времени на поиск и подбор персонала
                  </p>
                </li>
                <li className="stats__leftList__item">
                  <span className="stats__leftList__itemNum">3</span>
                  <p className="stats__leftList__itemText">
                    Рост эффективности основной деятельности
                  </p>
                </li>
              </ul>
              <button
                onClick={(e) => setRequestOverlay(true)}
                className="stats__leftBtn"
              >
                Использовать преимущества
              </button>
            </div>
            <div className="stats__right">
              <h6 className="stats__rightTitle">
                <span className="stats__rightTitle_marked">
                  Возьмем на себя
                </span>{" "}
                заботу о ваших кадрах!
              </h6>
              <ul className="stats__rightList">
                <li className="stats__rightList__item">
                  <span className="stats__rightList__itemNum">17</span>
                  <p className="stats__rightList__itemText">
                    Лет на рынке. Мы работаем с 1998 года
                  </p>
                </li>
                <li className="stats__rightList__item">
                  <span className="stats__rightList__itemNum">54</span>
                  <p className="stats__rightList__itemText">
                    Города во всех регионах страны - охват нашей региональной
                    сети
                  </p>
                </li>
                <li className="stats__rightList__item">
                  <span className="stats__rightList__itemNum">300</span>
                  <p className="stats__rightList__itemText">
                    Тысяч анкет в нашей базе. Мы подберем персонал для ваших
                    нужд мгновенно!
                  </p>
                </li>
              </ul>
              <button
                onClick={(e) => setRequestOverlay(true)}
                className="stats__rightBtn"
              >
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
                <img src="/img/partner1-min.png" alt="" />
              </div>
              <div className="partners__card">
                <img src="/img/partner2-min.png" alt="" />
              </div>
              <div className="partners__card">
                <img src="/img/partner3-min.png" alt="" />
              </div>
              <div className="partners__card">
                <img src="/img/partner4-min.png" alt="" />
              </div>
              <div className="partners__card">
                <img src="/img/partner5-min.png" alt="" />
              </div>
              <div className="partners__card">
                <img src="/img/partner6-min.png" alt="" />
              </div>
              <div className="partners__card">
                <img src="/img/partner7-min.png" alt="" />
              </div>
              <div className="partners__card">
                <img src="/img/partner8-min.png" alt="" />
              </div>
              <div className="partners__card">
                <img src="/img/partner9-min.png" alt="" />
              </div>
              <div className="partners__card">
                <img src="/img/partner10-min.png" alt="" />
              </div>
              <div className="partners__card">
                <img src="/img/partner11-min.png" alt="" />
              </div>
              <div className="partners__card">
                <img src="/img/partner12-min.png" alt="" />
              </div>
              <div className="partners__card">
                <img src="/img/partner13-min.png" alt="" />
              </div>
              <div className="partners__card">
                <img src="/img/partner14-min.png" alt="" />
              </div>
              <div className="partners__card">
                <img src="/img/partner15-min.png" alt="" />
              </div>
              <div className="partners__card">
                <img src="/img/partner16-min.png" alt="" />
              </div>
              <div className="partners__card">
                <img src="/img/partner17-min.png" alt="" />
              </div>
              <div className="partners__card">
                <img src="/img/partner18-min.png" alt="" />
              </div>
              <div className="partners__card">
                <img src="/img/partner19-min.png" alt="" />
              </div>
              <div className="partners__card">
                <img src="/img/partner20-min.png" alt="" />
              </div>
            </div>
            <p className="partners__text">
              И еще <span className="partners__text_marked">276</span> лучших
              компаний страны. Присоединяйтесь!
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
                  <img className="coop_cardImg" src="/img/coop1.svg" alt="" />
                  <p className="coop_cardText">
                    Заполните форму обратной связи, наши менеджеры свяжутся с
                    вами для уточнения деталей.
                  </p>
                  <img
                    className="coop_cardBackImg"
                    src="/img/coopLightGrayEllipse.svg"
                    alt=""
                  />
                </div>
                <div className="coop_card card2">
                  <img className="coop_cardImg" src="/img/coop2.svg" alt="" />
                  <p className="coop_cardText">
                    Мы обработаем вашу заявку. За вами будет закреплен
                    персональный сотрудник, который подготовит пакет документов
                  </p>
                  <img
                    className="coop_cardBackImg"
                    src="/img/coopLightGrayEllipse.svg"
                    alt=""
                  />
                </div>
                <div className="coop_card card3">
                  <img className="coop_cardImg" src="/img/coop3.svg" alt="" />
                  <p className="coop_cardText">
                    После заключения договора, наши сотрудники под нашим
                    контролем отправятся на ваш объект
                  </p>
                  <img
                    className="coop_cardBackImg"
                    src="/img/coopLightGrayEllipse.svg"
                    alt=""
                  />
                </div>
                <div className="coop_card card4">
                  <img className="coop_cardImg" src="/img/coop4.svg" alt="" />
                  <p className="coop_cardText">
                    Развивайте свой бизнес не отвлекаясь на рутину по подбору и
                    контролю персонала
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
                <button
                  onClick={(e) => setRequestOverlay(true)}
                  className="coop__imgAbs coop__imgBtn e8"
                >
                  Заполнить заявку
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section__map">
        <div className="container">
          <div className="mapWrap">
            <h5 className="map__title">
              Крупнейшая на рынке региональная сеть
            </h5>
            <div className="map__bottom">
              <p className="map__bottom__text">{region}</p>
              <div
                // если нет адресов-окно не отображается
                className={`map__bottom__box ${
                  officesAddr.length > 0 ? "visible" : null
                }`}
              >
                <button
                  className="map__bottom__box__closeBtn"
                  onClick={(e) => closeOfficesInfo()}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.414 10.0001L17.707 3.70708C17.8025 3.61483 17.8787 3.50449 17.9311 3.38249C17.9835 3.26048 18.0111 3.12926 18.0122 2.99648C18.0134 2.8637 17.9881 2.73202 17.9378 2.60913C17.8875 2.48623 17.8132 2.37458 17.7194 2.28069C17.6255 2.18679 17.5138 2.11254 17.3909 2.06226C17.268 2.01198 17.1363 1.98668 17.0036 1.98783C16.8708 1.98898 16.7396 2.01657 16.6176 2.06898C16.4956 2.12139 16.3852 2.19757 16.293 2.29308L9.99996 8.58608L3.70696 2.29308C3.51836 2.11092 3.26575 2.01013 3.00356 2.01241C2.74136 2.01469 2.49055 2.11985 2.30514 2.30526C2.11973 2.49067 2.01456 2.74148 2.01229 3.00368C2.01001 3.26588 2.1108 3.51848 2.29296 3.70708L8.58596 10.0001L2.29296 16.2931C2.19745 16.3853 2.12127 16.4957 2.06886 16.6177C2.01645 16.7397 1.98886 16.8709 1.98771 17.0037C1.98655 17.1365 2.01186 17.2681 2.06214 17.391C2.11242 17.5139 2.18667 17.6256 2.28056 17.7195C2.37446 17.8134 2.48611 17.8876 2.60901 17.9379C2.7319 17.9882 2.86358 18.0135 2.99636 18.0123C3.12914 18.0112 3.26036 17.9836 3.38236 17.9312C3.50437 17.8788 3.61471 17.8026 3.70696 17.7071L9.99996 11.4141L16.293 17.7071C16.4324 17.8479 16.6107 17.944 16.8049 17.9831C16.9992 18.0222 17.2008 18.0026 17.3839 17.9268C17.567 17.8509 17.7233 17.7223 17.8331 17.5573C17.9428 17.3922 18.0009 17.1983 18 17.0001C18 16.8688 17.9741 16.7387 17.9238 16.6174C17.8736 16.4961 17.7999 16.3859 17.707 16.2931L11.414 10.0001Z"
                      fill="#656084"
                    />
                  </svg>
                </button>
                {/* выводимые адреса офисов при клике  на регион*/}
                {officesAddr.map((office, index) => (
                  <p key={index}>{office}</p>
                ))}
              </div>
              <MapInteractive
                region={region}
                setRegion={setRegion}
                officesAddr={officesAddr}
                setOfficesAddr={setOfficesAddr}
                path={path}
                setPath={setPath}
              />
            </div>
            <div className="map__bottomMedia">
              <div className="map__bottomMedia__search">
                <input
                  className="map__bottomMedia__searchInp"
                  type="text"
                  placeholder="Выберите регион"
                  value={regionFilter}
                  onChange={(e) => setRegionFilter(e.target.value)}
                />
                <div
                  onClick={() => {
                    setDropMap(!dropMap);
                    if (dropMap === false) {
                      setRegionFilter("");
                      setRegionMedia("Выберите регион");
                    }
                  }}
                  className={`map__bottomMedia__icon ${dropMap && "btn__open"}`}
                >
                  <span className="map__bottomMedia__iconPath1"></span>
                  <span className="map__bottomMedia__iconPath2"></span>
                </div>
                <ul
                  className={`map__bottomMedia__searchDropDown ${
                    dropMap && "open"
                  }`}
                >
                  {regions
                    .filter((reg) =>
                      reg.toLowerCase().includes(regionFilter.toLowerCase())
                    )
                    .map((reg, index) => (
                      <li
                        className="map__bottomMedia__searchDropDown__item"
                        key={index}
                        onClick={() => {
                          setRegionFilter(reg);
                          setDropMap(!dropMap);
                          setRegionMedia(reg);
                        }}
                      >
                        {reg}
                      </li>
                    ))}
                </ul>
                <p className="map__bottomMedia__text">{regionMedia}</p>
                <div
                  // если нет адресов-окно не отображается
                  className={`map__bottomMedia__box ${
                    officesAddrMedia.length > 0 ? "visible" : null
                  }`}
                >
                  <button
                    className="map__bottomMedia__box__closeBtn"
                    onClick={() => {
                      setOfficesAddrMedia([]);
                      setRegionFilter("");
                      setRegionMedia("Выберите регион");
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.414 10.0001L17.707 3.70708C17.8025 3.61483 17.8787 3.50449 17.9311 3.38249C17.9835 3.26048 18.0111 3.12926 18.0122 2.99648C18.0134 2.8637 17.9881 2.73202 17.9378 2.60913C17.8875 2.48623 17.8132 2.37458 17.7194 2.28069C17.6255 2.18679 17.5138 2.11254 17.3909 2.06226C17.268 2.01198 17.1363 1.98668 17.0036 1.98783C16.8708 1.98898 16.7396 2.01657 16.6176 2.06898C16.4956 2.12139 16.3852 2.19757 16.293 2.29308L9.99996 8.58608L3.70696 2.29308C3.51836 2.11092 3.26575 2.01013 3.00356 2.01241C2.74136 2.01469 2.49055 2.11985 2.30514 2.30526C2.11973 2.49067 2.01456 2.74148 2.01229 3.00368C2.01001 3.26588 2.1108 3.51848 2.29296 3.70708L8.58596 10.0001L2.29296 16.2931C2.19745 16.3853 2.12127 16.4957 2.06886 16.6177C2.01645 16.7397 1.98886 16.8709 1.98771 17.0037C1.98655 17.1365 2.01186 17.2681 2.06214 17.391C2.11242 17.5139 2.18667 17.6256 2.28056 17.7195C2.37446 17.8134 2.48611 17.8876 2.60901 17.9379C2.7319 17.9882 2.86358 18.0135 2.99636 18.0123C3.12914 18.0112 3.26036 17.9836 3.38236 17.9312C3.50437 17.8788 3.61471 17.8026 3.70696 17.7071L9.99996 11.4141L16.293 17.7071C16.4324 17.8479 16.6107 17.944 16.8049 17.9831C16.9992 18.0222 17.2008 18.0026 17.3839 17.9268C17.567 17.8509 17.7233 17.7223 17.8331 17.5573C17.9428 17.3922 18.0009 17.1983 18 17.0001C18 16.8688 17.9741 16.7387 17.9238 16.6174C17.8736 16.4961 17.7999 16.3859 17.707 16.2931L11.414 10.0001Z"
                        fill="#656084"
                      />
                    </svg>
                  </button>
                  {/* выводимые адреса офисов при клике  на регион*/}
                  {officesAddrMedia.map((office, index) => (
                    <p className="map__bottomMedia__box__addr" key={index}>
                      {office}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
