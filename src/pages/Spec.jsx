import React, { useContext, useEffect, useState } from "react";
import CardSpec from "../components/CardSpec/CardSpec";
import prices from "../price.json";
import UserContext from "../UserContext";

const Spec = () => {
  const { currentTown } = useContext(UserContext);

  const [specs, setSpecs] = useState([]);

  useEffect(() => {
    setSpecs([]);
    for (let price of prices) {
      if (price.Город.includes(currentTown) && price.Цена != 0) {
        const obj = {
          Город: price.Город,
          Специализация: price.СПЕЦИАЛИЗАЦИЯ,
          Цена: price.Цена,
        };
        setSpecs((prev) => [...prev, obj]);
      }
    }
  }, [currentTown]);

  return (
    <div className="specialties">
      <div className="container">
        <div className="specialtiesWrap">
          <h5 className="specialties__title">
            Специальности{" "}
            <span className="specialties__title_marked">и цены</span>
          </h5>
          <div className="specialties__cards">
            {specs.map((spec, index) => (
              <CardSpec
                key={index}
                specPage
                img={`/img/${spec.Специализация.split(' ').join('')}.svg`}
                spec={spec.Специализация}
                subTitle={`от ${spec.Цена} руб/час`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spec;
