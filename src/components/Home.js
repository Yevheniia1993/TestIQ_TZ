import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="background-first">
        <div className="text-onImg">
          <div className="text-onImg1">Пройдите точный и быстрый</div>
          <div className="text-onImg2">тест на определение IQ</div>
          <button className="open-test">
            <Link to="/Test"> Пройти тест</Link>
          </button>
          <div className="text-onImg3">
            И получите рекомендации по развитию своего интеллекта{" "}
          </div>
          <div className="text-onImg4">
            и улучшению финансового благосостояния и личной жизни
          </div>
          <div className="div-icon">
            <img className="icon-text" src="./img/Group 3.png" alt="" />
            <div className="text">Подробнее</div>
          </div>
        </div>
      </div>
      <div className="background-second">
        <div className="text-second">
          "Профессиональный IQ-тест позволяет не только определить коэффициент
          вашего интеллекта, но и выработать список рекомендаций для повышения
          этого показателя."
        </div>
      </div>
      <div className="background-third">
        <div className="text-third">
          Также по результатам теста
          <div>ВЫ ПОЛУЧИТЕ</div> подробные <br />
          <div>СОВЕТЫ</div> по определению наиболее перспективной{" "}
          <div>ДЛЯ ВАШЕГО ТИПА интеллекта СФЕРЫ ДЕЯТЕЛЬНОСТИ,</div>
          <br />
          которая принесет вам скорейший финансовый результат.
        </div>
        <img className="img-third" src="./img/325-01.png" alt="" />
        <Link className="open-test2" to="/Test">
          {" "}
          Пройти тест
        </Link>
      </div>
      <div className="background-four">
        <div className="text-four">
          Прохождение теста займет у вас не более <div>12 минут</div>, а его
          результаты вы сможете<div> использовать всю жизнь.</div>
        </div>
        <div className="div-scroll">
          <div className="div-inside">
            Профессиональная интерпретация и детально{" "}
            <div>проработанные рекомендации</div> позволят вам качественно{" "}
            <div>изменить все аспекты своей жизни:</div> от финансового до
            любовного.
          </div>
        </div>
        <button className="open-test3">Пройти тест</button>
        <div className="footer">2019</div>
      </div>
    </div>
  );
}
export default Home;
