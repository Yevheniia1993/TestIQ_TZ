import React, { useState } from "react";
import { Link } from "react-router-dom";
function Test3() {
  const [Number, setNumber] = useState("");
  const [colorIn, setColorIn] = useState({ background: "", color: "" });
  const [ButActive, setActive] = useState(false);
  function DataTest(event) {
    setActive(true);
    setNumber(event.target.value);
    setColorIn({ background: "#FFC700", color: "#272727" });
  }
  function Next() {
    localStorage.setItem("number", Number);
  }
  return (
    <div className="all-test">
      <div className="head-test">
        <img src="./img/rain_bk3.png" alt="" />
        <div className="head-text">ТЕСТ НА ОПРЕДЕЛЕНИЕ IQ</div>
      </div>
      <div className="line-test">
        <div className="green-line" style={{ width: "64px" }}></div>
      </div>
      <div className="body-testFour">
        <div className="question-test1">
          Продолжите числовой ряд: 18 20 24 32{" "}
        </div>
        <div className="data1">
          <div className="data-test">
            <input
              onChange={DataTest.bind(this)}
              name="test"
              type="radio"
              value="62"
            />
            62
          </div>
          <div className="data-test">
            <input
              onChange={DataTest.bind(this)}
              name="test"
              type="radio"
              value="48"
            />
            48
          </div>
          <div className="data-test">
            <input
              onChange={DataTest.bind(this)}
              name="test"
              type="radio"
              value="74"
            />
            74
          </div>
          <div className="data-test">
            <input
              onChange={DataTest.bind(this)}
              name="test"
              type="radio"
              value="57"
            />
            57
          </div>
          <div className="data-test">
            <input
              onChange={DataTest.bind(this)}
              name="test"
              type="radio"
              value="60"
            />
            60
          </div>
          <div className="data-test">
            <input
              onChange={DataTest.bind(this)}
              name="test"
              type="radio"
              value="70"
            />
            70
          </div>
        </div>
        {ButActive ? (
          <Link onClick={Next} className="next" style={colorIn} to="/Test4">
            Далее
          </Link>
        ) : (
          <Link className="next">Далее</Link>
        )}
      </div>
    </div>
  );
}
export default Test3;
