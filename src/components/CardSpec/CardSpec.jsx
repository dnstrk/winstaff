import React from "react";
import cl from "./CardSpec.module.scss";

export default function CardSpec({
  home = false,
  specPage = false,
  img,
  spec,
  subTitle,
  text,
}) {
  return (
    <div className={cl.specialists__card}>
      <div className={cl.card__head}>
        <img className={cl.card__headImg} src={img} alt="" />
        <div className={`${cl.card__headInfo} ${specPage && cl.spec_page}`}>
          <p className={cl.card__headInfo__title}>
            {home && "Специальность:"} <b className={cl.card__headInfo__title_marked}>{spec}</b>
          </p>
          <span
            className={cl.card__headInfo__subTitle}
          >
            {subTitle}
          </span>
          <p className={cl.card__headInfo__text}>{text}</p>
        </div>
      </div>
      <button className={cl.card__actionBtn}>Заказать</button>
    </div>
  );
}
