import React, { useState } from "react";
import { Link } from "react-router-dom";
function Test6() {
  const [City, setCity] = useState("");
  const [colorIn, setColorIn] = useState({ background: "", color: "" });
  const [ButActive, setActive] = useState(false);
  function DataTest(event) {
    setActive(true);
    setCity(event.target.value);
    setColorIn({ background: "#FFC700", color: "#272727" });
  }
  function Next() {
    localStorage.setItem("city", City);
  }
  return (
    <div className="all-test">
      <div className="head-test">
        <img src="./img/rain_bk3.png" alt="" />
        <div className="head-text">ТЕСТ НА ОПРЕДЕЛЕНИЕ IQ</div>
      </div>
      <div className="line-test">
        <div className="green-line" style={{ width: "103px" }}></div>
      </div>
      <div className="body-testFour">
        <div className="question-test1">Какой из городов лишний?</div>
        <div className="data1">
          <div className="data-test">
            <input
              onChange={DataTest.bind(this)}
              name="test"
              type="radio"
              value="Вашингтон"
            />
            Вашингтон
          </div>
          <div className="data-test">
            <input
              onChange={DataTest.bind(this)}
              name="test"
              type="radio"
              value="Лондон"
            />
            Лондон
          </div>
          <div className="data-test">
            <input
              onChange={DataTest.bind(this)}
              name="test"
              type="radio"
              value="Париж"
            />
            Париж
          </div>
          <div className="data-test">
            <input
              onChange={DataTest.bind(this)}
              name="test"
              type="radio"
              value="Нью-Йорк"
            />
            Нью-Йорк
          </div>
          <div className="data-test">
            <input
              onChange={DataTest.bind(this)}
              name="test"
              type="radio"
              value="Москва"
            />
            Москва
          </div>
          <div className="data-test">
            <input
              onChange={DataTest.bind(this)}
              name="test"
              type="radio"
              value="Оттава"
            />
            Оттава
          </div>
        </div>
        {ButActive ? (
          <Link onClick={Next} className="next" style={colorIn} to="/Test7">
            Далее
          </Link>
        ) : (
          <Link className="next">Далее</Link>
        )}
      </div>
    </div>
  );
}
export default Test6;
