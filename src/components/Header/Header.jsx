import React from "react";
import cl from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = ({currentTown,  setTownOverlay}) => {
  return (
    <header className={cl.header}>
      <div className="container">
        <div className={cl.header__wrap}>
          <Link to={'/'} className={cl.header__logo}>
            <img width={35} height={35} src="/img/logo1.svg" alt="" />
            <img width={170} height={40} src="/img/logo2.svg" alt="" />
          </Link>
          <nav className={cl.header__nav}>
            <ul className={cl.header__navList}>
              <li className={cl.header__navItem}>
                <Link className={cl.header__navLink} to={"/about"}>
                  О нашей компании
                </Link>
              </li>
              <li className={cl.header__navItem}>
                <Link className={cl.header__navLink} to={"/#"}>
                  Специалисты и цены
                </Link>
              </li>
              <li className={cl.header__navItem}>
                <a className={cl.header__navLink} href="tel:">
                  <b>+7 903 192-83-98</b>
                </a>
              </li>
            </ul>
          </nav>
          <div className={cl.header__town}>
            <span className={cl.town__text}>Ваш город:</span>
            <button onClick={e=>setTownOverlay(true)} className={cl.town__btn}>{currentTown}</button>
          </div>
          <button className={cl.header__orderBtn}>Заявка на персонал</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
