import React, {
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";
import cl from "./RequestOverlay.module.scss";
import RadioSpec from "../RadioSpec/RadioSpec";
import UserContext from "../../UserContext";
import IMask from "imask";
import prices from "../../price.json";
import { Link } from "react-router-dom";

const RequestOverlay = () => {
    const {
        specs,

        requests,
        setRequests,

        cardRequest,
        setCardReuest,

        requestOverlay,
        setRequestOverlay,
        phoneRequest,
        mailRequest,
        nameRequest,
        townRequest,
        countRequest,
        setPhoneRequest,
        setMailRequest,
        setNameRequest,
        setTownRequest,
        setCountRequest,

        currentTown,
        selectedSpec,
        setSelectedSpec,
        requestAccept,
        setRequestAccept,
        phoneValid,
        mailValid,
        countValid,
        townValid,
        setTownValid,
        phoneValidation,
        emailValidation,
        nameValidation,
        townValidation,
        countValidation,
        phoneValidationMarker,
        countValidationMarker,
        emailValidationMarker,
        nameValidationMarker,
        townValidationMarker,

        sendRequestForm,
    } = useContext(UserContext);

    //закрытие модалки по клику вне самой модалки
    const closeOverlay = (e) => {
        if (e.target.classList.contains(cl.overlay)) {
            setRequestOverlay(false);
            setTimeout(() => {
                setSelectedSpec("");
                setRequestAccept(false);
                setCardReuest(false);
            }, 500);
        }
    };

    //закрытие модалки по кнопке
    const closeOverlayBtn = (e) => {
        setTimeout(() => {
            setPhoneRequest("");
            setMailRequest("");
            setNameRequest("");
            setTownRequest("");
            setCountRequest("");
            setSelectedSpec("");
            setRequestAccept(false);
            setCardReuest(false);
        }, 1500);
        setRequestOverlay(false);

        //сброс валидации phone поля
        const inpPhoneBanner = document.getElementById(`inpPhoneR`);
        if (inpPhoneBanner) {
            inpPhoneBanner.style.borderColor = "transparent";
        }

        //сброс валидации email поля
        const inpEmailBanner = document.getElementById(`inpEmailR`);
        if (inpEmailBanner) {
            inpEmailBanner.style.borderColor = "transparent";
        }

        //сброс валидации name поля
        const inpNameBanner = document.getElementById(`inpNameR`);
        if (inpNameBanner) {
            inpNameBanner.style.borderColor = "transparent";
        }

        //сброс валидации count поля
        const inpTownBanner = document.getElementById(`inpTownR`);
        if (inpTownBanner) {
            inpTownBanner.style.borderColor = "transparent";
        }

        //сброс валидации count поля
        const inpCountBanner = document.getElementById(`inpCountR`);
        if (inpCountBanner) {
            inpCountBanner.style.borderColor = "transparent";
        }

        const radio = document.getElementsByName("radio");
        radio.forEach((r) => {
            r.checked = false;
        });
    };

    //маска телефона и почты + допуск символов в полях города и кол-ва
    useEffect(() => {
        const inpPhoneRequest = document.getElementById("inpPhoneR");
        let maskOption = {
            mask: "+{7} (000) 000-00-00",
        };
        if (inpPhoneRequest) {
            IMask(inpPhoneRequest, maskOption);
        }

        //закрытие модалки по кнопке

        //маска телефона и почты + допуск символов в полях города и кол-ва

        //</маска телефона>

        //<маска почты>
        const inpEmailRequest = document.getElementById("inpEmailR");
        if (inpEmailRequest) {
            inpEmailRequest.addEventListener("input", onInput);
        }

        const EMAIL_REGEXP =
            /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

        function onInput() {
            if (isEmailValid(inpEmailRequest.value)) {
                inpEmailRequest.style.borderColor = "green";
            } else {
                inpEmailRequest.style.borderColor = "red";
            }
        }

        function isEmailValid(value) {
            return EMAIL_REGEXP.test(value);
        }
        //</маска почты>

        //<маска города>
        const inpTownRequest = document.querySelector("#inpTownR");
        if (inpTownRequest) {
            inpTownRequest.addEventListener("keydown", (event) => {
                if (
                    (event.keyCode > 47 && event.keyCode < 58) ||
                    (event.keyCode > 96 && event.keyCode < 105)
                ) {
                    event.preventDefault();
                }
            });
        }
        //</маска города>

        //<маска кол-ва>
        const inpCountRequest = document.querySelector("#inpCountR");
        if (inpCountRequest) {
            inpCountRequest.addEventListener("keydown", (event) => {
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
        }
    });
    //</маска кол-ва>

    // useEffect(() => {
    //     setTownRequest(currentTown);

    // }, [currentTown, requestOverlay]);

    return (
        <div
            onClick={(e) => closeOverlay(e)}
            className={`${cl.overlay} ${requestOverlay && cl.overlay__visible}`}
        >
            <>
                {requestAccept ? (
                    <div className={cl.requestDrawerAccepted}>
                        <div className={cl.requestDrawerAccepted__head}>
                            <h6 className={cl.requestDrawerAccepted__headText}>
                                Заявка на персонал
                            </h6>
                            <button
                                type="button"
                                onClick={(e) => closeOverlayBtn()}
                                className={cl.requestDrawerAccepted__headBtn}
                            >
                                <svg
                                    className={
                                        cl.requestDrawerAccepted__headBtn__img
                                    }
                                    width="20"
                                    height="20"
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
                        </div>
                        <img
                            className={cl.requestDrawerAccepted__img}
                            width={70}
                            height={70}
                            src="/img/Accept.svg"
                            alt=""
                        />
                        <h5 className={cl.requestDrawerAccepted__title}>
                            Спасибо!
                        </h5>
                        <p className={cl.requestDrawerAccepted__text}>
                            Ваша заявка на персонал отправлена. В ближайшее
                            время за вами будет закреплен менеджер, который
                            свяжется с вами, уточнит детали и предложит варианты
                        </p>
                    </div>
                ) : (
                    <form className={cl.requestDrawer}>
                        <div className={cl.requestDrawer__head}>
                            <h6 className={cl.requestDrawer__headText}>
                                Заявка на персонал
                            </h6>
                            <button
                                type="button"
                                onClick={(e) => closeOverlayBtn()}
                                className={cl.requestDrawer__headBtn}
                            >
                                <svg
                                    className={cl.requestDrawer__headBtn__img}
                                    width="20"
                                    height="20"
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
                        </div>
                        <div className={cl.requestDrawer__contacts}>
                            <input
                                className={`${cl.requestDrawer__contacts_num} ${cl.default__inp}`}
                                id="inpPhoneR"
                                value={phoneRequest}
                                onBlur={() => {
                                    phoneValidation(phoneRequest);
                                    phoneRequest.length > 0 &&
                                        phoneValidationMarker(
                                            "inpPhoneR",
                                            phoneRequest
                                        );
                                }}
                                onChange={(e) =>
                                    setPhoneRequest(e.target.value)
                                }
                                placeholder="Ваш телефон"
                                type="text"
                            />
                            <input
                                className={`${cl.requestDrawer__contacts_email} ${cl.default__inp}`}
                                id="inpEmailR"
                                value={mailRequest}
                                onBlur={() => {
                                    emailValidation(mailRequest);
                                    mailRequest.length > 0 &&
                                        emailValidationMarker(
                                            "inpEmailR",
                                            mailRequest
                                        );
                                }}
                                onChange={(e) => setMailRequest(e.target.value)}
                                placeholder="Ваш e-mail"
                                type="text"
                            />
                        </div>
                        <input
                                        className={`${cl.requestDrawer__contacts_name} ${cl.default__inp}`}
                                        id="inpNameR"
                                        type="text"
                                        value={nameRequest}
                                        onBlur={() => {
                                            nameValidation(nameRequest);
                                        
                                            nameRequest.length > 0 &&
                                                nameValidationMarker(
                                                    "inpNameR",
                                                    nameRequest
                                                );
                                        }}
                                        onChange={(e) =>
                                            setNameRequest(e.target.value)
                                        }
                                        placeholder="Ваше имя"
                                    />
                        <div className={cl.requestDrawer__specialists}>
                            <p className={cl.specialists__title}>
                                {cardRequest
                                    ? "Специалист:"
                                    : `Доступные специалисты по городу ${currentTown}:`}
                            </p>

                            <div className={cl.specialists__radioGroup}>
                                {cardRequest ? (
                                    <RadioSpec
                                        radio={11}
                                        specialisation={selectedSpec}
                                        selected
                                    />
                                ) : (
                                    specs.map((spec, index) => (
                                        <RadioSpec
                                            key={index}
                                            radio={11 + index}
                                            specialisation={spec}
                                        />
                                    ))
                                )}
                                {/* <RadioSpec radio={11} specialisation="Кассир" />
                <RadioSpec radio={12} specialisation="Официант" />
                <RadioSpec radio={13} specialisation="Промоутер" />
                <RadioSpec radio={14} specialisation="Упаковщик" />
                <RadioSpec radio={15} specialisation="Продавец" />
                <RadioSpec
                  radio={16}
                  specialisation="Работник торгового зала"
                />
                <RadioSpec radio={17} specialisation="Сотрудник клининга" />
                <RadioSpec radio={18} specialisation="Горничная" />
                <RadioSpec radio={19} specialisation="Фасовщик" />
                <RadioSpec radio={20} specialisation="Мойщик" /> */}
                                {/* <Link
                  to="/specialties"
                  className={cl.specialists__radioGroup__btnAllSpec}
                >
                  Все специалисты
                </Link> */}
                            </div>
                        </div>
                        <div className={cl.requestDrawer__foot}>
                            <input
                                className={`${cl.default__inp}`}
                                id="inpTownR"
                                value={townRequest}
                                onBlur={(e) => {
                                    townValidation(townRequest);
                                    if (townRequest.length > 0) {
                                        townValidationMarker(
                                            e.target.id,
                                            townRequest
                                        );
                                    }
                                }}
                                onChange={(e) => setTownRequest(e.target.value)}
                                placeholder="Город"
                                type="text"
                            />
                            <input
                                className={`${cl.default__inp}`}
                                id="inpCountR"
                                value={countRequest}
                                onBlur={(e) => {
                                    countValidation(countRequest);
                                    if (countRequest.length > 0) {
                                        countValidationMarker(
                                            e.target.id,
                                            countRequest
                                        );
                                    }
                                }}
                                onChange={(e) =>
                                    setCountRequest(e.target.value)
                                }
                                placeholder="Количество"
                                type="text"
                            />
                            <button
                                onClick={() =>
                                    sendRequestForm(
                                        "send.php",
                                        phoneRequest,
                                        mailRequest,
                                        nameRequest,
                                        selectedSpec,
                                        townRequest,
                                        countRequest,
                                        "R",
                                        setPhoneRequest,
                                        setMailRequest,
                                        setNameRequest,
                                        setSelectedSpec,
                                        setTownRequest,
                                        setCountRequest
                                    )
                                }
                                type="button"
                                className={cl.requestDrawer__foot__send}
                            >
                                Отправить
                            </button>
                            <p className={cl.personalAgreement}>
                                Нажимая на кнопку вы соглашаетесь на обработку{" "}
                                <Link
                                    className={cl.personalAgreement__link}
                                    to="personal-agreement"
                                    target="_blank"
                                >
                                    персональных данных
                                </Link>
                            </p>
                        </div>
                        <button
                            onClick={() =>
                                sendRequestForm(
                                    "send.php",
                                    phoneRequest,
                                    mailRequest,
                                    selectedSpec,
                                    townRequest,
                                    countRequest,
                                    "R",
                                    setPhoneRequest,
                                    setMailRequest,
                                    setSelectedSpec,
                                    setTownRequest,
                                    setCountRequest
                                )
                            }
                            type="button"
                            className={cl.requestDrawer__foot__sendMedia}
                        >
                            Отправить
                        </button>
                        {/* {alert && (
              <b className={cl.requestDrawer__alert} style={{ color: "red" }}>
                Есть незаполненные поля
              </b>
            )} */}
                    </form>
                )}
            </>
        </div>
    );
};

export default RequestOverlay;
