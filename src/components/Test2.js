import React, { useState } from "react";
import { Link } from "react-router-dom";
function Test2() {
  const [Extra, setExtra] = useState("");
  const [colorIn, setColorIn] = useState({ background: "", color: "" });
  const [ButActive, setActive] = useState(false);
  function DataTest(event) {
    setActive(true);
    setExtra(event.target.value);
    setColorIn({ background: "#FFC700", color: "#272727" });
  }
  function Next() {
    localStorage.setItem("extra", Extra);
  }
  return (
    <div className="all-test">
      <div className="head-test">
        <img src="./img/rain_bk3.png" alt="" />
        <div className="head-text">ТЕСТ НА ОПРЕДЕЛЕНИЕ IQ</div>
      </div>
      <div className="line-test">
        <div className="green-line" style={{ width: "36px" }}></div>
      </div>
      <div className="body-testTh">
        <div className="question-test">Выберите лишнее:</div>
        <div className="data">
          <div className="data-test">
            <input
              onChange={DataTest.bind(this)}
              name="test"
              type="radio"
              value="Дом"
            />
            Дом
          </div>
          <div className="data-test">
            <input
              onChange={DataTest.bind(this)}
              name="test"
              type="radio"
              value="Шалаш"
            />
            Шалаш
          </div>
          <div className="data-test">
            <input
              onChange={DataTest.bind(this)}
              name="test"
              type="radio"
              value="Бунгало"
            />
            Бунгало
          </div>
          <div className="data-test">
            <input
              onChange={DataTest.bind(this)}
              name="test"
              type="radio"
              value="Скамейка"
            />
            Скамейка
          </div>
          <div className="data-test">
            <input
              onChange={DataTest.bind(this)}
              name="test"
              type="radio"
              value="Хижина"
            />
            Хижина
          </div>
        </div>
        {ButActive ? (
          <Link onClick={Next} className="next" style={colorIn} to="/Test3">
            Далее
          </Link>
        ) : (
          <Link className="next">Далее</Link>
        )}
      </div>
    </div>
  );
}
export default Test2;
