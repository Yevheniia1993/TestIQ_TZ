import React, { useState } from "react";
import { Link } from "react-router-dom";
function Test5() {
  const [Color2, setColor2] = useState("");
  const [colorIn, setColorIn] = useState({ background: "", color: "" });
  const [ButActive, setActive] = useState(false);
  function DataTest(event) {
    setActive(true);
    setColor2(event.target.id);
    setColorIn({ background: "#FFC700", color: "#272727" });
  }
  function Next() {
    localStorage.setItem("color2", Color2);
  }
  return (
    <div className="all-test">
      <div className="head-test">
        <img src="./img/rain_bk3.png" alt="" />
        <div className="head-text">ТЕСТ НА ОПРЕДЕЛЕНИЕ IQ</div>
      </div>
      <div className="line-test">
        <div className="green-line" style={{ width: "93px" }}></div>
      </div>
      <div className="body-testFour">
        <div className="question-test2">
          Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее
          Вам приятен:
        </div>
        <div className="data2">
          <div
            id="grey"
            onClick={DataTest.bind(this)}
            style={{ background: "#A8A8A8" }}
          ></div>
          <div
            id="light-blue"
            onClick={DataTest.bind(this)}
            style={{ background: "#46B3AC" }}
          ></div>
          <div
            id="brown"
            onClick={DataTest.bind(this)}
            style={{ background: "#A95403" }}
          ></div>
          <div
            id="green"
            onClick={DataTest.bind(this)}
            style={{ background: "#00A701" }}
          ></div>
          <div
            id="black"
            onClick={DataTest.bind(this)}
            style={{ background: "#000000" }}
          ></div>
          <div
            id="red"
            onClick={DataTest.bind(this)}
            style={{ background: "#F60100" }}
          ></div>
          <div
            id="rose"
            onClick={DataTest.bind(this)}
            style={{ background: "#850068" }}
          ></div>
          <div
            id="yellow"
            onClick={DataTest.bind(this)}
            style={{ background: "#FDFF19" }}
          ></div>
          <div
            id="blue"
            onClick={DataTest.bind(this)}
            style={{ background: "#0000A9" }}
          ></div>
        </div>
        {ButActive ? (
          <Link onClick={Next} className="next" style={colorIn} to="/Test6">
            Далее
          </Link>
        ) : (
          <Link className="next">Далее</Link>
        )}
      </div>
    </div>
  );
}
export default Test5;
