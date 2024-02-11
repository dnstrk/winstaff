import { useEffect, useState } from "react";
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
import prices from "./price.json";
import MessageOverlay from "./components/MessageOverlay/MessageOverlay";
import HeaderSub from "./components/HeaderSub/HeaderSub";
import {
  phoneValidationMarker,
  emailValidationMarker,
  countValidationMarker,
  townValidationMarker,
  scrollDisable,
} from "./sideFuncs";

function App() {
  // стейт списка городов из файла price.json
  const [townsAll, setTownsAll] = useState([]);

  useEffect(() => {
    for (let towns of prices) {
      setTownsAll((prev) => [...prev, towns.Город]);
    }
  }, []);
  const towns = new Set(townsAll); // список городов берется из актуального списка специализаций по городам

  const [specs, setSpecs] = useState([]); //массив актуальных по городу специализаций

  const [cardRequest, setCardReuest] = useState(false); //открытие модалки через карточку специалиста на странице 'специалисты и цены'
  // const [alert, setAlert] = useState(false); //алерт при незаполненном поле
  const [requestAccept, setRequestAccept] = useState(false); //отображение окна принятой заявки
  const [messageAccept, setMessageAccept] = useState(false); //отображение окна принятой заявки

  const [currentTown, setCurrentTown] = useState("Москва"); // текущий город должен браться скриптом
  const [townSearchValue, setTownSearchValue] = useState(""); // значение фильтра в модалке с выбором города
  const [townOverlay, setTownOverlay] = useState(false); //статус оверлея выбора города
  const [requestOverlay, setRequestOverlay] = useState(false); //статус оверлея заявки
  const [messageOverlay, setMessageOverlay] = useState(false); //статус оверлея заявки
  const [headerSub, setHeaderSub] = useState(false); //меню появляющаяся в медиа

  const [moveTop, setMoveTop] = useState(false);

  /*выбранная специальность
      выбор при нажатии на радиокнопку или 
      при нажатии на карточку с конкретной специализацией
  */
  const [selectedSpec, setSelectedSpec] = useState("");

  // стейты формы создания заявки для bannerForm
  const [phoneBanner, setPhoneBanner] = useState("");
  const [mailBanner, setMailBanner] = useState("");
  const [townBanner, setTownBanner] = useState("");
  const [countBanner, setCountBanner] = useState("");

  // стейты формы создания заявки для requestForm
  const [phoneRequest, setPhoneRequest] = useState("");
  const [mailRequest, setMailRequest] = useState("");
  const [townRequest, setTownRequest] = useState("");
  const [countRequest, setCountRequest] = useState("");

  // стейты формы создания сообщения
  const [phoneMessage, setPhoneMessage] = useState("");
  const [mailMessage, setMailMessage] = useState("");
  const [textMessage, setTextMessage] = useState("");

  // стейты валидации для отправки форм
  const [phoneValid, setPhoneValid] = useState(false);
  const [mailValid, setMailValid] = useState(false);
  const [townValid, setTownValid] = useState(false);
  const [countValid, setCountValid] = useState(false);

  /* список оформленных заказов, сюда записываются объекты с данными 
    после отправки формы (тестовая часть) */
  const [requests, setRequests] = useState([]);

  // обновление актуальных по городу специализаций
  useEffect(() => {
    setSpecs([]);
    for (let price of prices) {
      if (price.Город.includes(currentTown) && price.Цена !== 0) {
        setSpecs((prev) => [...prev, price.СПЕЦИАЛИЗАЦИЯ]);
      }
    }
  }, [currentTown]);

  /* открытие модалки на заявку через карточку 
    (отображается специальность карточки, по которой произведено нажатие)
    */
  const createCardRequest = (spec) => {
    setCardReuest(true);
    setSelectedSpec(spec);
    setRequestOverlay(true);
  };

  //блокировка отправки формы при незаполненном phone
  function phoneValidation(phone) {
    if (phone.length < 18) {
      setPhoneValid(false);
    } else {
      setPhoneValid(true);
    }
  }

  //блокировка отправки формы при незаполненном email
  function emailValidation(email) {
    const EMAIL_REGEXP =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    function isEmailValid(value) {
      return EMAIL_REGEXP.test(value);
    }
    if (isEmailValid(email)) {
      setMailValid(true);
    } else {
      setMailValid(false);
    }
  }

  // проверка на не 0 и заполненность в countBanner для доступа к отправке формы
  function countValidation(count) {
    if (count.length == 0 || count == 0) {
      setCountValid(false);
    } else {
      setCountValid(true);
    }
  }

  //валидация города на заполненность и доступ к отправке формы
  function townValidation(town) {
    if (town.length == 0) {
      setTownValid(false);
    } else {
      setTownValid(true);
    }
  }

  useEffect(() => {
    scrollDisable(requestOverlay, townOverlay, messageOverlay);
  }, [requestOverlay, townOverlay, messageOverlay]);

  return (
    <div className={`App`}>
      <UserContext.Provider
        value={{
          moveTop,
          setMoveTop,

          headerSub,
          setHeaderSub,

          specs,

          currentTown,
          setCurrentTown,
          townOverlay,
          setTownOverlay,
          townSearchValue,
          setTownSearchValue,

          requests,
          setRequests,

          //<форма заявки в секции banner>
          phoneBanner,
          setPhoneBanner,
          mailBanner,
          setMailBanner,
          townBanner,
          setTownBanner,
          countBanner,
          setCountBanner,
          //</форма заявки в секции banner>

          //<модалка создания заявки>
          ////модалка с по конкретной специальности
          cardRequest,
          setCardReuest,

          phoneRequest,
          mailRequest,
          townRequest,
          countRequest,
          setPhoneRequest,
          setMailRequest,
          setTownRequest,
          setCountRequest,

          createCardRequest,
          //</модалка создания заявки>

          selectedSpec,
          setSelectedSpec,

          // <модалка заявки + модалка подтверждения заявки>
          requestAccept,
          setRequestAccept,
          requestOverlay,
          setRequestOverlay,
          // </модалка заявки + модалка подтверждения заявки>

          // <валидации значений полей>
          phoneValid,
          setPhoneValid,
          mailValid,
          setMailValid,
          townValid,
          setTownValid,
          countValid,
          setCountValid,
          phoneValidation,
          phoneValidationMarker,
          countValidation,
          countValidationMarker,
          emailValidation,
          emailValidationMarker,
          townValidation,
          townValidationMarker,
          // </валидации значений полей>

          // <модалка отправки сообщения>
          messageOverlay,
          setMessageOverlay,

          phoneMessage,
          setPhoneMessage,
          mailMessage,
          setMailMessage,
          textMessage,
          setTextMessage,
          messageAccept,
          setMessageAccept,
          //</модалка отправки сообщения>
        }}
      >
        <Header />
        <HeaderSub />
        <TownOverlay //оверлей выбора города
          towns={Array.from(towns)}
        />
        <RequestOverlay //оверлей заявки на персонал
        />
        <MessageOverlay />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="specialties" element={<Spec />} />
        </Routes>

        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
