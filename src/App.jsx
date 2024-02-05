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
// import data from "./specialties.json";
import officeData from "./offises.json";
import prices from "./price.json";
import WriteOverlay from "./components/WriteOverlay/WriteOverlay";

function App() {
  const [townsAll, setTownsAll] = useState([]);

  useEffect(() => {
    for (let towns of prices) {
      setTownsAll((prev) => [...prev, towns.Город]);
    }
  }, []);
  const towns = new Set(townsAll);

  // const [userData, setUserData] = useState();

  // useEffect(() => {
  //     setUserData(data);
  // }, []);

  // console.log(userData);

  // const [xlsxData, setXlsxData] = useState();

  // function parseCSV(csvText) {
  //     const rows = csvText.split(/\r?\n/); // Split CSV text into rows, handling '\r' characters
  //     const headers = rows[0].split(","); // Extract headers (assumes the first row is the header row)
  //     const data = []; // Initialize an array to store parsed data
  //     for (let i = 1; i < rows.length; i++) {
  //         const rowData = rows[i].split(","); // Split the row, handling '\r' characters
  //         const rowObject = {};
  //         for (let j = 0; j < headers.length; j++) {
  //             rowObject[headers[j]] = rowData[j];
  //         }
  //         data.push(rowObject);
  //     }
  //     return data;
  // }

  // async function fetchData() {
  //     // const url =
  //     //     "https://docs.google.com/spreadsheets/d/e/2PACX-1vTFCirvLIA5AgTferKNERJnyxwYnJ2bkUcifAYCOZoxNicDnDS6KdAkcBOPNfHXRd3SGAXdy1_6nodh/pub?output=csv";
  //     const url =
  //         "https://qwell24.ru/docs/shared/path/%D0%A2%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D1%8B%20-%20%D0%A6%D0%B5%D0%BD%D1%8B%20%D0%BD%D0%B0%20%D1%81%D0%B0%D0%B9%D1%82%D1%8B%20rentstaff_qwell/";
  //     await axios
  //         .get(url)
  //         .then((resp) => {
  //             // const parsedData = parseCSV(resp.data);
  //             // setXlsxData(parsedData);
  //             setXlsxData(resp.data);
  //         })
  //         .catch((e) => console.log(e));
  // }

  // useEffect(() => {
  //     fetchData();
  // }, []);

  const [alert, setAlert] = useState(false); //алерт при незаполненном поле
  const [requestAccept, setRequestAccept] = useState(false); //отображение окна принятой заявки
  const [writeAccept, setWriteAccept] = useState(false); //отображение окна принятой заявки

  const [currentTown, setCurrentTown] = useState("Москва");
  const [townSearchValue, setTownSearchValue] = useState("");
  const [townOverlay, setTownOverlay] = useState(false); //статус оверлея выбора города
  const [requestOverlay, setRequestOverlay] = useState(false); //статус оверлея заявки
  const [writeOverlay, setWriteOverlay] = useState(false); //статус оверлея заявки

  const [selectedSpec, setSelectedSpec] = useState("");

  const [phoneBanner, setPhoneBanner] = useState("");
  const [mailBanner, setMailBanner] = useState("");
  const [townBanner, setTownBanner] = useState("");
  const [countBanner, setCountBanner] = useState("");

  const [phoneRequest, setPhoneRequest] = useState("");
  const [mailRequest, setMailRequest] = useState("");
  const [townRequest, setTownRequest] = useState("");
  const [countRequest, setCountRequest] = useState("");

  const [phoneWrite, setPhoneWrite] = useState("");
  const [mailWrite, setMailWrite] = useState("");
  const [textWrite, setTextWrite] = useState("");

  const [phoneValid, setPhoneValid] = useState(false);
  const [mailValid, setMailValid] = useState(false);
  const [townValid, setTownValid] = useState(false);
  const [countValid, setCountValid] = useState(false);

  const [requests, setRequests] = useState([]);

  //блок отправки формы при незаполненном phone
  function phoneValidation(phone) {
    if (phone.length < 18) {
      setPhoneValid(false);
    } else {
      setPhoneValid(true);
    }
  }
  function phoneValidationMarker(id, phone) {
    const inpPhone = document.getElementById(`${id}`);

    if (phone.length < 18) {
      inpPhone.style.borderColor = "red";
    } else {
      inpPhone.style.borderColor = "green";
    }
  }

  //блок отправки формы при незаполненном email
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
  function emailValidationMarker(id, email) {
    const inpEmail = document.getElementById(`${id}`);

    const EMAIL_REGEXP =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    function isEmailValid(value) {
      return EMAIL_REGEXP.test(value);
    }
    if (isEmailValid(email)) {
      inpEmail.style.borderColor = "green";
    } else {
      inpEmail.style.borderColor = "red";
    }
  }

  //проверка на не 0 в countBanner
  function countValidation(count) {
    if (count.length == 0 || count == 0) {
      setCountValid(false);
    } else {
      setCountValid(true);
    }
  }
  function countValidationMarker(id, count) {
    const inpCount = document.getElementById(`${id}`);

    if (count.length == 0 || Number(count) == 0) {
      inpCount.style.borderColor = "red";
    } else {
      inpCount.style.borderColor = "green";
    }
  }
  function townValidation(town) {
    if (town.length == 0) {
      setTownValid(false);
    } else {
      setTownValid(true);
    }
  }

  function townValidationMarker(id, town) {
    const inpTown = document.getElementById(`${id}`);

    if (town.length == 0) {
      inpTown.style.borderColor = "red";
    } else {
      inpTown.style.borderColor = "green";
    }
  }

  return (
    <div className="App">
      <UserContext.Provider
        value={{
          currentTown,
          requests,
          setRequests,
          selectedSpec,
          setSelectedSpec,
          alert,
          setAlert,
          requestAccept,
          setRequestAccept,
          requestOverlay,
          setRequestOverlay,
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
          writeOverlay,
          setWriteOverlay,

          phoneWrite,
          setPhoneWrite,
          mailWrite,
          setMailWrite,
          textWrite,
          setTextWrite,
          writeAccept,
          setWriteAccept,
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
          towns={Array.from(towns)}
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
        <WriteOverlay />
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
