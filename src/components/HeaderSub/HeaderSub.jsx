import React, { useContext } from "react";
import cl from "./HeaderSub.module.scss";
import { Link } from "react-router-dom";
import UserContext from "../../UserContext";

export default function HeaderSub() {
    const { headerSub } = useContext(UserContext);

    return (
        <div className={`${cl.headerSub} ${headerSub && cl.visible}`}>
            <nav className={cl.header__nav}>
                <ul className={cl.header__navList}>
                    <li className={cl.header__navItem}>
                        <Link className={cl.header__navLink} to={"/about"}>
                            О компании
                        </Link>
                    </li>
                    <li className={cl.header__navItem}>
                        <Link
                            className={cl.header__navLink}
                            to={"/specialties"}
                        >
                            Специалисты и цены
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
