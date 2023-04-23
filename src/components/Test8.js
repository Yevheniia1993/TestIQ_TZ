import React, { useState } from "react";
import { Link } from "react-router-dom";
function Test8() {
  const [Important, setImportant] = useState("");
  const [colorIn, setColorIn] = useState({ background: "", color: "" });
  const [ButActive, setActive] = useState(false);
  function DataTest(event) {
    setActive(true);
    setImportant(event.target.value);
    setColorIn({ background: "#FFC700", color: "#272727" });
  }
  function Next() {
    localStorage.setItem("important", Important);
  }
  return (
    <div className="all-test">
      <div className="head-test">
        <img src="./img/rain_bk3.png" alt="" />
        <div className="head-text">ТЕСТ НА ОПРЕДЕЛЕНИЕ IQ</div>
      </div>
      <div className="line-test">
        <div className="green-line" style={{ width: "145px" }}></div>
      </div>
      <div className="body-testS">
        <div className="question-test">Вам привычнее и важнее:</div>
        <div className="data">
          <div className="data-test2">
            <input
              onChange={DataTest.bind(this)}
              name="test"
              type="radio"
              value="first"
            />
            Наслаждаться каждой минутой проведенного времени
          </div>
          <div className="data-test2">
            <input
              onChange={DataTest.bind(this)}
              name="test"
              type="radio"
              value="second"
            />
            Быть устремленными мыслями в будущее
          </div>
          <div className="data-test2">
            <input
              onChange={DataTest.bind(this)}
              name="test"
              type="radio"
              value="third"
            />
            Учитывать в ежедневной практике прошлый опыт
          </div>
        </div>
        {ButActive ? (
          <Link onClick={Next} className="next" style={colorIn} to="/Test9">
            Далее
          </Link>
        ) : (
          <Link className="next">Далее</Link>
        )}
      </div>
    </div>
  );
}
export default Test8;
