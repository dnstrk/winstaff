import React, { useContext } from "react";
import cl from "./RadioSpec.module.scss";
import UserContext from "../../UserContext";

const RadioSpec = ({ specialisation, radio }) => {
  const { setSelectedSpec } = useContext(UserContext);

  return (
    <div
      className={cl.radioGroup}
        onChange={(e) => setSelectedSpec(e.target.value)}
    >
      <input
        name="radio"
        value={specialisation}
        id={`radio-${radio}`}
        type="radio"
      />
      <label htmlFor={`radio-${radio}`} className={cl.radioGroup__lbl}>
        {specialisation}
      </label>
    </div>
  );
};

export default RadioSpec;
