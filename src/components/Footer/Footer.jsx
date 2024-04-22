import React, { useContext } from "react";
import cl from "./Footer.module.scss";
import UserContext from "../../UserContext";

const Footer = () => {
    const {siteNum, siteMail} = useContext(UserContext)

    return (
        <footer className={cl.footer}>
            <div className={cl.container}>
                <div className={cl.footerWrap}>
                    <h5 className={cl.footer__title}>ООО «Винстафф»</h5>
                    <div className={cl.footer__info}>
                        <div className={cl.footer__infoContacts}>
                            <div className={cl.footer__infoContacts_num}>
                                <span>Телефон:</span>
                                <a
                                    className={cl.footer__infoContacts_link}
                                    href={`tel:${siteNum}`}
                                >
                                    <b>{siteNum}</b>
                                </a>
                            </div>
                            <div className={cl.footer__infoContacts_email}>
                                <span>Email:</span>
                                <a
                                    className={cl.footer__infoContacts_link}
                                    href={`mailto:${siteMail}`}
                                >
                                    <b>{siteMail}</b>
                                </a>
                            </div>
                        </div>
                        <div className={cl.footer__infoAddr}>
                            <span className={cl.footer__infoAddr_title}>
                                Адрес:
                            </span>
                            <p className={cl.footer__infoAddr_place}>
                                117393, г. Москва,<br /> муниципальный округ
                                Обручевский вн. тер. г., Профсоюзная ул., д. 66,
                                стр. 1, офис 301
                            </p>
                        </div>
                    </div>
                    <p className={cl.footer__copyright}>
                        Copyright @ 1998-2024 | Win-Staff – Win-staff.ru Все
                        права защищены
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
