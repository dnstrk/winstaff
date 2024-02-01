import { useState } from "react";
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

function App() {
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

    const [currentTown, setCurrentTown] = useState("Москва");
    const [townSearchValue, setTownSearchValue] = useState("");
    const [townOverlay, setTownOverlay] = useState(false); //статус оверлея выбора города
    const [requestOverlay, setRequestOverlay] = useState(false); //статус оверлея заявки

    const [selectedSpec, setSelectedSpec] = useState("");

    const [phoneRequest, setPhoneRequest] = useState("");
    const [mailRequest, setMailRequest] = useState("");
    const [townRequest, setTownRequest] = useState("");
    const [countRequest, setCountRequest] = useState("");

    const [phoneValid, setPhoneValid] = useState(false);
    const [mailValid, setMailValid] = useState(false);

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

    // console.log(requests);

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
                    requestAccept,
                    setRequestAccept,
                    requestOverlay,
                    setRequestOverlay,
                    phoneValid,
                    setPhoneValid,
                    mailValid,
                    setMailValid,
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
