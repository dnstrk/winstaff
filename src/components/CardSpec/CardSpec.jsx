import React from "react";
import cl from "./CardSpec.module.scss";

export default function CardSpec({ img, spec, subTitle, text }) {
    return (
        <div className={cl.specialists__card}>
            <div className={cl.card__head}>
                <img className={cl.card__headImg} src={img} alt="" />
                <div className={cl.card__headInfo}>
                    <p className={cl.card__headInfo__title}>
                        Специальность: <b>{spec}</b>
                    </p>
                    <span className={cl.card__headInfo__subTitle}>
                        {subTitle}
                    </span>
                    <p className={cl.card__headInfo__text}>{text}</p>
                </div>
            </div>
            <button className={cl.card__actionBtn}>Заказать</button>
        </div>
    );
}
