import React, { useContext } from "react";
import UserContext from "../UserContext";

export default function About() {
  const { moveTop, setMessageOverlay } = useContext(UserContext);
  window.scrollTo(0,0)


  return (
    <div className={`about ${moveTop && "moveTop"}`}>
      <div className="container">
        <div className="aboutWrap">
          <div className="about__info">
            <h2 className="about__infoTitle">
              <span className="about__infoTitle_marked">
                С 1998 года мы работаем
              </span>
              <br />
              на рынке аутсорса персонала
            </h2>
            <p className="about__infoSubTitle">
              «Путь в тысячу ли начинается с первого шага» — сказал великий
              китайский философ Лао Цзы. И в океане бизнеса эта истина остается
              справедливой по сей день.
            </p>
            <p className="about__infoText">
              Наша компания начала свой путь в 1998 году, оказывая полный спектр
              услуг аутсорсинга для различных проектов в сфере торговли,
              маркетинга и промоушна. <br />
              <br />
              Добросовестный труд молодых профессионалов в этой сфере стал
              залогом успеха компании: инновационные идеи, безупречное
              администрирование проектов на всех этапах и ответственность за
              конечный результат привели нас к первому крупному контракту с
              федеральной сетью розничного ритейла АШАН. <br />
              <br /> Этот контракт стал отправной точкой к региональному
              расширению. И уже в 2007 году сеть филиалов, расположенных по всей
              России, стала именоваться qWell. <br />
              <br /> С 2011 года qWell стала признанным профлидером на рынке
              аутсорсинга в РФ, и по сей день мы уверенно держим эту позицию.{" "}
              <br />
              <br /> Сегодня qWell — это бренд, завоевавший доверие и имеющий
              высокую репутацию во многих областях. Наша основная деятельность —
              производственный, логистический, обслуживающий аутсорсинг для
              гипермаркетов и супермаркетов, оптово-розничных сетей и складских
              комплексов, ресторанных и гостиничных холдингов, а также
              направление услуг в области рекламы и маркетинга: IMC, BTL, Event
              marketing, Direct marketing, организация промо-мероприятий и
              подбор промоутеров, мерчендайзинговый контроль на торговых точках.{" "}
              <br />
              <br /> Наше кредо — качественная реализация задач, стоящих перед
              заказчиком, на максимально выгодных условиях и в срок. Мы
              предоставляем всю необходимую аналитику и статистику по проекту,
              что помогает нашим клиентам в долгосрочном планировании своих
              бизнес-процессов, Кроме того, мы внедряем новейшие инструменты для
              снижения цен и повышения качества услуг. <br />
              <br /> qWell уже не раз доказала свою эффективность на деле: в
              нашей партнерской базе — тысячи довольных клиентов, среди которых
              самые успешные и крупные компании страны. <br />
              <br /> Мы не берем сомнительные проекты, целью которых является
              исключительно получение прибыли. <br />
              <br /> Мы создаем рынок услуг во всех регионах России и развиваем
              его, работая по самым высоким стандартам, как и подобает лучшим из
              лучших!
            </p>
          </div>
          <div className="about__img">
            <div className="about__imgAddr">
              <b className="about__imgAddr__title">
                Центральный офис в Москве:
              </b>
              <p className="about__imgAddrText">
                <a
                  href="tel:+7 495 933 40 63"
                  className="about__imgAddrText_marked"
                >
                  +7 495 933 40 63
                </a>
                <br />
                ул. Краснобогатырская, д. 2, стр. 1
              </p>
            </div>
            <img
              className="about__imgAbs a1"
              src="/img/coopEllipsMain.svg"
              alt=""
            />
            <img
              className="about__imgAbs a2"
              src="/img/coopImgMain.png"
              alt=""
            />
            <img
              className="about__imgAbs a3"
              src="/img/coopGrayEllipse.svg"
              alt=""
            />
            <img
              className="about__imgAbs a4"
              src="/img/coopGrayEllipse.svg"
              alt=""
            />
            <img
              className="about__imgAbs a5"
              src="/img/coopGrayEllipse.svg"
              alt=""
            />
            <img
              className="about__imgAbs a6"
              src="/img/bannerHorDots.svg"
              alt=""
            />
            <img
              className="about__imgAbs a7"
              src="/img/coopVertDots.svg"
              alt=""
            />
            <button
              onClick={(e) => setMessageOverlay(true)}
              className="about__imgAbs about__imgBtn a8"
            >
              Написать нам
            </button>
          </div>
          <div className="about__addrAdaptive">
            <b className="about__addrAdaptive__title">
              Центральный офис в Москве:
            </b>
            <p className="about__addrAdaptiveText">
              <a
                href="tel:+7 495 933 40 63"
                className="about__addrAdaptiveText_marked"
              >
                +7 495 933 40 63
              </a>
              <br />
              ул. Краснобогатырская, д. 2, стр. 1
            </p>
            <button
              onClick={(e) => setMessageOverlay(true)}
              className="about__textBtn"
            >
              Написать нам
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
