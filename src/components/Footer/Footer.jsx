import React from "react";
import cl from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className="container">
                <div className={cl.footerWrap}>
                    <h5 className={cl.footer__title}>Где нас найти</h5>
                    <div className={cl.footer__social}>
                        <a className={cl.footer__socialLink}>
                            <img
                                className={cl.footer__socialLink__img}
                                src="/img/tg.svg"
                                alt="Telegram icon"
                            />
                        </a>
                        <a className={cl.footer__socialLink}>
                            <img
                                className={cl.footer__socialLink__img}
                                src="/img/wa.svg"
                                alt="WhatsApp icon"
                            />
                        </a>
                        <a className={cl.footer__socialLink}>
                            <img
                                className={cl.footer__socialLink__img}
                                src="/img/vk.svg"
                                alt="Vkontakte icon"
                            />
                        </a>
                        <a className={cl.footer__socialLink}>
                            <img
                                className={cl.footer__socialLink__img}
                                src="/img/ok.svg"
                                alt="Odnoklassniki icon"
                            />
                        </a>
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
