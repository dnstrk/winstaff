import React from "react";
import cl from "./TownOverlay.module.scss";

const TownOverlay = ({
  currentTown,
  setCurrentTown,
  towns,
  townSearchValue,
  setTownSearchValue,
  townOverlay,
  setTownOverlay,
}) => {
  const closeOverlay = (e) => {
    e.target.classList.contains(cl.overlay) && setTownOverlay(false);
  };

  return (
    <div
      onClick={(e) => closeOverlay(e)}
      className={`${cl.overlay} ${townOverlay && cl.overlay__visible}`}
    >
      <div className={cl.town__select}>
        <div className={cl.town__selectHead}>
          <span className={cl.town__selectHead__text}>Ваш город:</span>
          <span className={cl.town__selectHead__currentTown}>
            {currentTown}
          </span>
          <button
            onClick={(e) => setTownOverlay(false)}
            className={cl.town__selectHead__btn}
          >
            <img
              className={cl.town__selectHead__btnImg}
              width={20}
              height={20}
              src="/img/closeBtn.svg"
              alt=""
            />
          </button>
        </div>
        <div className={cl.town__selectSearch}>
          <input
            className={cl.town__selectSearch__input}
            placeholder="Выбрать город..."
            type="text"
            value={townSearchValue}
            onChange={(e) => setTownSearchValue(e.target.value)}
          />
          <button className={cl.town__selectSearch__btn}>Найти</button>
        </div>
        <div className={cl.town__selectTowns}>
          {towns
            .filter((town) =>
              town.toLowerCase().includes(townSearchValue.toLowerCase())
            )
            .map((town, index) => (
              <p
                onClick={(e) => setCurrentTown(town)}
                className={cl.town__selectTown}
                key={index}
              >
                {town}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TownOverlay;
