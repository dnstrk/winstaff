import React, { useContext, useEffect, useState } from "react";
import UserContext from "../UserContext";
import { admPwd } from "../sideFuncs";
import axios from "axios";

export default function Admin() {
    const {
        isAdmin,
        setIsAdmin,
        loginInp,
        setLoginInp,
        loginPwd,
        setLoginPwd,
        siteNum,
        setSiteNum,
        setSiteMail,
        newSite,
        fetchData
    } = useContext(UserContext);

    const [newSiteNum, setNewSiteNum] = useState("");
    const [newSiteMail, setNewSiteMail] = useState("");

    const setNewSiteNumber = () => {
        setSiteNum(newSiteNum);
        postNum();
        setNewSiteNum("");
        setTimeout(() => {
            fetchData();
        }, 1000);
    };

    const setNewSiteEmail = () => {
        setSiteMail(newSiteMail);
        postMail();
        setNewSiteMail("");
        setTimeout(() => {
            fetchData();
        }, 1000);
    };

    async function login() {
        const loginData = {
            login: loginInp,
            password: loginPwd
        }
        const {data} = await axios.post('http://localhost:5000/auth',loginData)
        // setIsAdmin(data.isAdmin)
        if(data.isAdmin) {
            setIsAdmin(data.isAdmin)
        } else {
            alert(data.text)
            setLoginInp('')
            setLoginPwd('')
        }
    }

    function postNum() {
        // axios({
        //     method: "post",
        //     url: "https://wintest.msto.ru:5000/writeFile",
        //     data: { num: newSiteNum },
        // });
        axios({
            method: "post",
            url: "http://localhost:5000/writeFile",
            data: { winNum: newSiteNum },
        });
        // axios({
        //     method: "post",
        //     url: "http://172.16.30.133:5000/writeFile",
        //     data: { winNum: newSiteNum },
        // });
    }
    function postMail() {
        // axios({
        //     method: "post",
        //     url: "https://wintest.msto.ru:5000/writeFile",
        //     data: { num: newSiteNum },
        // });
        axios({
            method: "post",
            url: "http://localhost:5000/writeFile",
            data: { winMail: newSiteMail },
        });
        // axios({
        //     method: "post",
        //     url: "http://172.16.30.133:5000/writeFile",
        //     data: { winMail: newSiteMail },
        // });
    }

    // useEffect(() => {
    //     fetchNum();
    // }, []);

    return (
        <div className="admin">
            <div className="container">
                {isAdmin ? (
                    <div className="adminLogon__wrap">
                        <h4 className="adminLogon__wrapTitle">
                            Панель управления
                        </h4>
                        <h5 className="adminLogon__wrapTitle">{siteNum}</h5>
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
                            onClick={login}
                        >
                            Войти
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
