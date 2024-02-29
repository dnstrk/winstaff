import React from "react";
import cl from "./Footer.module.scss";

const Footer = () => {
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
                                    href="tel:+7(903) 192-83-98"
                                >
                                    <b>+7(903) 192-83-98</b>
                                </a>
                            </div>
                            <div className={cl.footer__infoContacts_email}>
                                <span>Email:</span>
                                <a
                                    className={cl.footer__infoContacts_link}
                                    href="mailto:info@win-staff.ru"
                                >
                                    <b>info@win-staff.ru</b>
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
