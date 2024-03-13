import React, { useContext, useEffect } from "react";
import cl from "./MessageOverlay.module.scss";
import UserContext from "../../UserContext";
import IMask from "imask";
import axios from "axios";
import { Link } from "react-router-dom";

const MessageOverlay = () => {
    const {
        messageOverlay,
        setMessageOverlay,
        phoneMessage,
        setPhoneMessage,
        mailMessage,
        setMailMessage,
        textMessage,
        setTextMessage,
        phoneValidation,
        emailValidation,

        phoneValid,
        mailValid,

        messageAccept,
        setMessageAccept,

        phoneValidationMarker,
        emailValidationMarker,
    } = useContext(UserContext);

    //закрытие модалки по клику вне самой модалки
    const closeOverlay = (e) => {
        if (e.target.classList.contains(cl.overlay)) {
            setMessageOverlay(false);
            setTimeout(() => {
                setMessageAccept(false);
            }, 500);
        }
    };

    //закрытие модалки по кнопке
    const closeOverlayBtn = (e) => {
        setMessageOverlay(false);
        setTimeout(() => {
            setMessageAccept(false);
        }, 500);
    };

    useEffect(() => {
        const inpPhone = document.getElementById("inpPhoneM");
        let maskOption = {
            mask: "+{7} (000) 000-00-00",
        };
        if (inpPhone) {
            IMask(inpPhone, maskOption);
            inpPhone.addEventListener("input", () => {
                if (phoneMessage.length < 18) {
                    inpPhone.style.borderColor = "red";
                } else {
                    inpPhone.style.borderColor = "green";
                }
            });
        }

        const inpEmail = document.getElementById("inpEmailM");
        if (inpEmail) {
            inpEmail.addEventListener("input", onInput);
        }

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
    });

    const sendMess = () => {
        if (phoneValid && mailValid && textMessage.length > 0) {
            let formData = new FormData(); //formdata object

            formData.append("phone", phoneMessage); //append the values with key, value pair
            formData.append("mail", mailMessage);
            formData.append("text", textMessage);

            const config = {
                headers: { "content-type": "multipart/form-data" },
            };

            axios
                .post("http://uldalex.beget.tech/send.php", formData, config)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });

            setMessageAccept(true);
            setMailMessage("");
            setPhoneMessage("");
            setTextMessage("");
        } else {
            phoneValidationMarker("inpPhoneM", phoneMessage);
            emailValidationMarker("inpEmailM", mailMessage);
        }
    };

    // const sendForm = () => {
    //   if (phoneValid && mailValid && textMessage.length > 0) {
    //     setMessageAccept(true);
    //     setMailMessage("");
    //     setPhoneMessage("");
    //     setTextMessage("");
    //   } else {
    //     phoneValidationMarker("inpPhoneW", phoneMessage);
    //     emailValidationMarker("inpEmailW", mailMessage);
    //   }
    // };

    return (
        <div
            onClick={(e) => closeOverlay(e)}
            className={`${cl.overlay} ${messageOverlay && cl.overlay__visible}`}
        >
            {messageAccept ? (
                <div className={cl.writeDrawerAccepted}>
                    <div className={cl.writeDrawerAccepted__head}>
                        <h6 className={cl.writeDrawerAccepted__headText}>
                            Написать нам
                        </h6>
                        <button
                            type="button"
                            onClick={(e) => closeOverlayBtn()}
                            className={cl.writeDrawerAccepted__headBtn}
                        >
                            <svg
                                className={cl.writeDrawerAccepted__headBtn__img}
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
                        className={cl.writeDrawerAccepted__img}
                        width={70}
                        height={70}
                        src="/img/Accept.svg"
                        alt=""
                    />
                    <h5 className={cl.writeDrawerAccepted__title}>Спасибо!</h5>
                    <p className={cl.writeDrawerAccepted__text}>
                        Ваше сообщение отправлено!
                    </p>
                </div>
            ) : (
                <form className={cl.writeDrawer}>
                    <div className={cl.writeDrawer__head}>
                        <h6 className={cl.writeDrawer__headText}>
                            Написать нам
                        </h6>
                        <button
                            type="button"
                            onClick={(e) => closeOverlayBtn(e)}
                            className={cl.writeDrawer__headBtn}
                        >
                            <svg
                                className={cl.writeDrawer__headBtn__img}
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
                    <div className={cl.writeDrawer__contacts}>
                        <input
                            className={`${cl.writeDrawer__contacts_num} ${cl.default__inp}`}
                            id="inpPhoneM"
                            value={phoneMessage}
                            onBlur={() => phoneValidation(phoneMessage)}
                            onChange={(e) => setPhoneMessage(e.target.value)}
                            placeholder="Ваш телефон"
                            type="text"
                        />
                        <input
                            className={`${cl.writeDrawer__contacts_email} ${cl.default__inp}`}
                            id="inpEmailM"
                            value={mailMessage}
                            onBlur={() => emailValidation(mailMessage)}
                            onChange={(e) => setMailMessage(e.target.value)}
                            placeholder="Ваш e-mail"
                            type="text"
                        />
                    </div>
                    <textarea
                        className={cl.writeDrawer__text}
                        placeholder="Ваше сообщение"
                        id=""
                        cols="30"
                        rows="10"
                        value={textMessage}
                        onChange={(e) => setTextMessage(e.target.value)}
                    ></textarea>
                    <div className={cl.writeDrawer__foot}>
                        <button
                            onClick={(e) => sendMess()}
                            type="button"
                            className={cl.writeDrawer__foot__send}
                        >
                            Отправить
                        </button>
                        <p className={cl.writeDrawer__foot__personalAgreement}>
                            Нажимая на кнопку вы соглашаетесь на обработку{" "}
                            <Link
                                className={cl.writeDrawer__foot__personalAgreement__link}
                                to="personal-agreement"
                                target="_blank"
                            >
                                персональных данных
                            </Link>
                        </p>
                    </div>
                </form>
            )}
        </div>
    );
};

export default MessageOverlay;
