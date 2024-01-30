import React from "react";
import CardSpec from "../components/CardSpec/CardSpec";

const Spec = () => {
  return (
    <div className="specialties">
      <div className="container">
        <div className="specialtiesWrap">
          <h5 className="specialties__title">
            Специальности{" "}
            <span className="specialties__title_marked">и цены</span>
          </h5>
          <div className="specialties__cards">
            <CardSpec
              specPage
              img={"/img/spec1.png"}
              spec={"Кассир"}
              subTitle={"от 578 руб/час"}
            />
            <CardSpec
              specPage
              img={"/img/spec2.png"}
              spec={"Работник торгового зала"}
              subTitle={"от 578 руб/час  "}
            />
            <CardSpec
              specPage
              img={"/img/spec3.png"}
              spec={"Грузчик"}
              subTitle={"от 578 руб/час  "}
            />
            <CardSpec
              specPage
              img={"/img/spec4.png"}
              spec={"Официант"}
              subTitle={"от 578 руб/час  "}
            />
            <CardSpec
              specPage
              img={"/img/spec5.png"}
              spec={"Промоутер"}
              subTitle={"от 578 руб/час  "}
            />
            <CardSpec
              specPage
              img={"/img/spec5.png"}
              spec={"Горничная"}
              subTitle={"от 578 руб/час  "}
            />
            <CardSpec
              specPage
              img={"/img/spec1.png"}
              spec={"Кассир"}
              subTitle={"от 578 руб/час"}
            />
            <CardSpec
              specPage
              img={"/img/spec2.png"}
              spec={"Работник торгового зала"}
              subTitle={"от 578 руб/час  "}
            />
            <CardSpec
              specPage
              img={"/img/spec3.png"}
              spec={"Грузчик"}
              subTitle={"от 578 руб/час  "}
            />
            <CardSpec
              specPage
              img={"/img/spec4.png"}
              spec={"Официант"}
              subTitle={"от 578 руб/час  "}
            />
            <CardSpec
              specPage
              img={"/img/spec5.png"}
              spec={"Промоутер"}
              subTitle={"от 578 руб/час  "}
            />
            <CardSpec
              specPage
              img={"/img/spec5.png"}
              spec={"Горничная"}
              subTitle={"от 578 руб/час  "}
            />
            <CardSpec
              specPage
              img={"/img/spec1.png"}
              spec={"Кассир"}
              subTitle={"от 578 руб/час"}
            />
            <CardSpec
              specPage
              img={"/img/spec2.png"}
              spec={"Работник торгового зала"}
              subTitle={"от 578 руб/час  "}
            />
            <CardSpec
              specPage
              img={"/img/spec3.png"}
              spec={"Грузчик"}
              subTitle={"от 578 руб/час  "}
            />
            <CardSpec
              specPage
              img={"/img/spec4.png"}
              spec={"Официант"}
              subTitle={"от 578 руб/час  "}
            />
            <CardSpec
              specPage
              img={"/img/spec5.png"}
              spec={"Промоутер"}
              subTitle={"от 578 руб/час  "}
            />
            <CardSpec
              specPage
              img={"/img/spec5.png"}
              spec={"Горничная"}
              subTitle={"от 578 руб/час  "}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spec;
