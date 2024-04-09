import React, { useContext } from "react";
import cl from "./CardSpec.module.scss";
import UserContext from "../../UserContext";

export default function CardSpec({
    home = false, //  карточки используются на странице home и 
    specPage = false,
    img,
    alt,
    spec,
    subTitle,
    text,
}) {
    const { createCardRequest } = useContext(UserContext);
    return (
        <div className={cl.specialists__card}>
            <div className={cl.card__head}>
                <img className={cl.card__headImg} src={img} alt={alt} />
                <div
                    // окраска выбранной кнопки специализации при выборе через конкретную карточку
                    className={`${cl.card__headInfo} ${
                        specPage && cl.spec_page
                    }`}
                >
                    <p className={cl.card__headInfo__title}>
                        {home && "Специальность:"}{" "}
                        <b className={cl.card__headInfo__title_marked}>
                            {spec}
                        </b>
                    </p>
                    <span className={cl.card__headInfo__subTitle}>
                        {subTitle}
                    </span>
                    <p className={cl.card__headInfo__text}>{text}</p>
                </div>
            </div>
            <button
                onClick={(e) => createCardRequest(spec)}
                className={cl.card__actionBtn}
            >
                Заказать
            </button>
        </div>
    );
}
