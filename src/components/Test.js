import React, { useState } from "react";
import { Link } from "react-router-dom";
function Test() {
  const [Gender, setGender] = useState("");
  const [colorIn, setColorIn] = useState({ background: "", color: "" });
  const [ButActive, setActive] = useState(false);
  function DataTest(event) {
    setActive(true);
    setGender(event.target.value);
    setColorIn({ background: "#FFC700", color: "#272727" });
  }
  function Next() {
    localStorage.setItem("gender", Gender);
  }
  return (
    <div className="all-test">
      <div className="head-test">
        <img src="./img/rain_bk3.png" alt="" />
        <div className="head-text">ТЕСТ НА ОПРЕДЕЛЕНИЕ IQ</div>
      </div>
      <div className="line-test">
        <div className="green-line"></div>
      </div>
      <div className="body-testF">
        <div className="question-test">Ваш пол</div>
        <div className="data">
          <div className="data-test">
            <input
              onChange={DataTest.bind(this)}
              name="test"
              type="radio"
              value="Mужчина"
            />
            Mужчина
          </div>
          <div className="data-test">
            <input
              onChange={DataTest.bind(this)}
              name="test"
              type="radio"
              value="Женщина"
            />
            Женщина
          </div>
        </div>
        {ButActive ? (
          <Link onClick={Next} className="next" style={colorIn} to="/Test1">
            Далее
          </Link>
        ) : (
          <Link className="next">Далее</Link>
        )}
      </div>
    </div>
  );
}
export default Test;
