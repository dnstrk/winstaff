import React from "react";
import cl from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = ({ currentTown, setTownOverlay, setRequestOverlay }) => {
  return (
    <header className={cl.header}>
      <div className={cl.container}>
        <div className={cl.header__wrap}>
          <Link to={"/"} className={cl.header__logo}>
            <img className={cl.header__logo1} src="/img/logo1.svg" alt="" />
            <img className={cl.header__logo2} src="/img/logo2.svg" alt="" />
          </Link>
          <nav className={cl.header__nav}>
            <ul className={cl.header__navList}>
              <li className={cl.header__navItem}>
                <Link className={cl.header__navLink} to={"/about"}>
                  О нашей компании
                </Link>
              </li>
              <li className={cl.header__navItem}>
                <Link className={cl.header__navLink} to={"/specialties"}>
                  Специалисты и цены
                </Link>
              </li>
              <li className={cl.header__navItem}>
                <a className={cl.header__navLink} href="tel:">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6.67962 3.32038L7.29289 2.70711C7.68342 2.31658 8.31658 2.31658 8.70711 2.70711L11.2929 5.29289C11.6834 5.68342 11.6834 6.31658 11.2929 6.70711L9.50048 8.49952C9.2016 8.7984 9.1275 9.255 9.31653 9.63307C10.4093 11.8186 12.1814 13.5907 14.3669 14.6835C14.745 14.8725 15.2016 14.7984 15.5005 14.4995L17.2929 12.7071C17.6834 12.3166 18.3166 12.3166 18.7071 12.7071L21.2929 15.2929C21.6834 15.6834 21.6834 16.3166 21.2929 16.7071L20.6796 17.3204C18.5683 19.4317 15.2257 19.6693 12.837 17.8777L11.6286 16.9714C9.88504 15.6638 8.33622 14.115 7.02857 12.3714L6.12226 11.163C4.33072 8.7743 4.56827 5.43173 6.67962 3.32038Z"
                      fill="#272C3E"
                    />
                  </svg>
                  <b>+7 903 192-83-98</b>
                </a>
              </li>
            </ul>
          </nav>
          <div className={cl.mediaHeader__town}>
            <div className={cl.header__town}>
              <span className={cl.town__text}>Ваш город:</span>
              <button
                onClick={(e) => setTownOverlay(true)}
                className={cl.town__btn}
              >
                {currentTown}
              </button>
            </div>
            <button className={cl.mediaTownCall}>
              <a className={cl.mediaTownCall_Link} href="tel:79031928398">
                <img
                  className={cl.mediaTownCall_LinkImg}
                  src="/img/headerPhoneMedia.svg"
                  alt=""
                />
              </a>
            </button>
          </div>
          <button
            onClick={(e) => setRequestOverlay(true)}
            className={cl.header__orderBtn}
          >
            Заявка на персонал
          </button>
          <div className={cl.mediaHeader__order}>
            <button className={cl.mediaHeader__orderChat}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <g clipPath="url(#clip0_108_1575)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.5 0C5.6075 0 0 5.6075 0 12.5C0 14.66 0.5625 16.775 1.63 18.655L0.12625 22.4562C-0.44625 23.9675 1.03375 25.4475 2.545 24.8738L6.345 23.3687C8.22023 24.4377 10.3415 24.9999 12.5 25C19.3925 25 25 19.3925 25 12.5C25 5.6075 19.3925 0 12.5 0ZM6.61625 11.6163C6.73207 11.4998 6.86977 11.4073 7.02143 11.3443C7.1731 11.2812 7.33574 11.2487 7.5 11.2487C7.66426 11.2487 7.8269 11.2812 7.97857 11.3443C8.13023 11.4073 8.26793 11.4998 8.38375 11.6163C8.50023 11.7321 8.59267 11.8698 8.65574 12.0214C8.71882 12.1731 8.75129 12.3357 8.75129 12.5C8.75129 12.6643 8.71882 12.8269 8.65574 12.9786C8.59267 13.1302 8.50023 13.2679 8.38375 13.3837C8.26793 13.5002 8.13023 13.5927 7.97857 13.6557C7.8269 13.7188 7.66426 13.7513 7.5 13.7513C7.33574 13.7513 7.1731 13.7188 7.02143 13.6557C6.86977 13.5927 6.73207 13.5002 6.61625 13.3837C6.49977 13.2679 6.40733 13.1302 6.34426 12.9786C6.28118 12.8269 6.24871 12.6643 6.24871 12.5C6.24871 12.3357 6.28118 12.1731 6.34426 12.0214C6.40733 11.8698 6.49977 11.7321 6.61625 11.6163ZM11.6163 11.6163C11.7321 11.4998 11.8698 11.4073 12.0214 11.3443C12.1731 11.2812 12.3357 11.2487 12.5 11.2487C12.6643 11.2487 12.8269 11.2812 12.9786 11.3443C13.1302 11.4073 13.2679 11.4998 13.3837 11.6163C13.5002 11.7321 13.5927 11.8698 13.6557 12.0214C13.7188 12.1731 13.7513 12.3357 13.7513 12.5C13.7513 12.6643 13.7188 12.8269 13.6557 12.9786C13.5927 13.1302 13.5002 13.2679 13.3837 13.3837C13.1489 13.6172 12.8312 13.7482 12.5 13.7482C12.1688 13.7482 11.8511 13.6172 11.6163 13.3837C11.3828 13.1489 11.2518 12.8312 11.2518 12.5C11.2518 12.1688 11.3828 11.8511 11.6163 11.6163ZM17.5 11.25C17.3357 11.2495 17.1729 11.2815 17.0211 11.3441C16.8692 11.4068 16.7312 11.4988 16.615 11.615C16.4988 11.7312 16.4068 11.8692 16.3441 12.0211C16.2815 12.1729 16.2495 12.3357 16.25 12.5C16.2495 12.6643 16.2815 12.8271 16.3441 12.9789C16.4068 13.1308 16.4988 13.2688 16.615 13.385C16.7312 13.5012 16.8692 13.5932 17.0211 13.6559C17.1729 13.7185 17.3357 13.7505 17.5 13.75C17.6643 13.7505 17.8271 13.7185 17.9789 13.6559C18.1308 13.5932 18.2688 13.5012 18.385 13.385C18.5012 13.2688 18.5932 13.1308 18.6559 12.9789C18.7185 12.8271 18.7505 12.6643 18.75 12.5C18.7505 12.3357 18.7185 12.1729 18.6559 12.0211C18.5932 11.8692 18.5012 11.7312 18.385 11.615C18.2688 11.4988 18.1308 11.4068 17.9789 11.3441C17.8271 11.2815 17.6643 11.2495 17.5 11.25Z"
                    fill="#B0AAD0"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_108_1575">
                    <rect width="25" height="25" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button className={cl.mediaHeader__orderPay}>
              <img src="/img/headerPayMedia.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
