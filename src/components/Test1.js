import React, { useState } from "react";
import { Link } from "react-router-dom";
function Test1() {
  const [Old, setOld] = useState("");
  const [colorIn, setColorIn] = useState({ background: "", color: "" });
  const [ButActive, setActive] = useState(false);
  function DataTest(event) {
    setActive(true);
    setOld(event.target.value);
    setColorIn({ background: "#FFC700", color: "#272727" });
  }
  function Next() {
    localStorage.setItem("old", Old);
  }
  return (
    <div className="all-test">
      <div className="head-test">
        <img src="./img/rain_bk3.png" alt="" />
        <div className="head-text">ТЕСТ НА ОПРЕДЕЛЕНИЕ IQ</div>
      </div>
      <div className="line-test">
        <div className="green-line" style={{ width: "25px" }}></div>
      </div>
      <div className="body-testS">
        <div className="question-test">Укажите ваш возраст:</div>
        <div className="data">
          <div className="data-test">
            <input
              onChange={DataTest.bind(this)}
              name="test"
              type="radio"
              value="До18"
            />
            До 18
          </div>
          <div className="data-test">
            <input
              onChange={DataTest.bind(this)}
              name="test"
              type="radio"
              value="18/28"
            />
            От 18 до 28
          </div>
          <div className="data-test">
            <input
              onChange={DataTest.bind(this)}
              name="test"
              type="radio"
              value="29/35"
            />
            От 29 до 35
          </div>
          <div className="data-test">
            <input
              onChange={DataTest.bind(this)}
              name="test"
              type="radio"
              value="От36"
            />
            От 36
          </div>
        </div>
        {ButActive ? (
          <Link onClick={Next} className="next" style={colorIn} to="/Test2">
            Далее
          </Link>
        ) : (
          <Link className="next">Далее</Link>
        )}
      </div>
    </div>
  );
}
export default Test1;
