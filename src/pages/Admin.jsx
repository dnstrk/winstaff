import React, { useContext, useState } from "react";
import UserContext from "../UserContext";
import { admPwd } from "../sideFuncs";

export default function Admin() {
    const {
        isAdmin,
        setIsAdmin,
        loginInp,
        setLoginInp,
        loginPwd,
        setLoginPwd,
        setSiteNum,
        setSiteMail,
        newSite,
    } = useContext(UserContext);

    const [newSiteNum, setNewSiteNum] = useState("");
    const [newSiteMail, setNewSiteMail] = useState("");

    const confirmLogin = () => {
        if (loginInp == "admin" && loginPwd == admPwd) {
            setIsAdmin(true);
        } else {
            setLoginInp("");
            setLoginPwd("");
        }
    };

    const setNewSiteNumber = () => {
        setSiteNum(newSiteNum);
        setNewSiteNum("");
    };

    const setNewSiteEmail = () => {
        setSiteMail(newSiteMail);
        setNewSiteMail("");
    };
    

    return (
        <div className="admin">
            <div className="container">
                {isAdmin ? (
                    <div className="adminLogon__wrap">
                        <h4 className="adminLogon__wrapTitle">
                            Панель управления
                        </h4>
                        <div className="adminLogon__wrapNum">
                            <span>Изменение номера</span>
                            <input
                                className="adm_input"
                                type="text"
                                onChange={(e) => {
                                    setNewSiteNum(e.target.value);
                                }}
                                value={newSiteNum}
                            />
                            <button
                                className="adm_btn"
                                onClick={setNewSiteNumber}
                            >
                                Ок
                            </button>
                        </div>
                        <div className="adminLogon__wrapMail">
                            <span>Изменение почты</span>
                            <input
                                className="adm_input"
                                type="text"
                                onChange={(e) => {
                                    setNewSiteMail(e.target.value);
                                }}
                                value={newSiteMail}
                            />
                            <button
                                className="adm_btn"
                                onClick={setNewSiteEmail}
                            >
                                Ок
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="adminAuth__wrap">
                        <h4 className="admin__wrapTitle">Авторизация</h4>
                        <div className="admin__wrapLogin">
                            <span className="admin__wrapLogin_title">
                                Логин
                            </span>
                            <input
                                className="admin__wrapLogin_inp adm_input"
                                type="text"
                                onChange={(e) => {
                                    setLoginInp(e.target.value);
                                }}
                                value={loginInp}
                            />
                        </div>
                        <div className="admin__wrapPass">
                            <span className="admin__wrapPass_title">
                                Пароль
                            </span>
                            <input
                                className="admin__wrapPass_inp adm_input"
                                type="password"
                                onChange={(e) => {
                                    setLoginPwd(e.target.value);
                                }}
                                value={loginPwd}
                            />
                        </div>
                        <button
                            className="admin__wrapEnter adm_btn"
                            onClick={confirmLogin}
                        >
                            Войти
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
