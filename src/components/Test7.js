import React, { useState } from "react";
import { Link } from "react-router-dom";
function Test7() {
  const [Picture, setPicture] = useState("");
  const [colorIn, setColorIn] = useState({ background: "", color: "" });
  const [ButActive, setActive] = useState(false);
  function DataTest(event) {
    setActive(true);
    setPicture(event.target.id);
    setColorIn({ background: "#FFC700", color: "#272727" });
  }
  function Next() {
    localStorage.setItem("picture", Picture);
  }
  return (
    <div className="all-test">
      <div className="head-test">
        <img src="./img/rain_bk3.png" alt="" />
        <div className="head-text">ТЕСТ НА ОПРЕДЕЛЕНИЕ IQ</div>
      </div>
      <div className="line-test">
        <div className="green-line" style={{ width: "128px" }}></div>
      </div>
      <div className="body-testFour">
        <div className="question-test2">
          Выберите правильную фигуру из четырёх пронумерованных.
        </div>
        <img className="img-test7" src="./img/image1.png" alt="" />
        <div className="data3">
          <div
            id="1"
            onClick={DataTest.bind(this)}
            style={{ background: "white" }}
          >
            1
          </div>
          <div
            id="2"
            onClick={DataTest.bind(this)}
            style={{ background: "white" }}
          >
            2
          </div>
          <div
            id="3"
            onClick={DataTest.bind(this)}
            style={{ background: "white" }}
          >
            3
          </div>
          <div
            id="4"
            onClick={DataTest.bind(this)}
            style={{ background: "white" }}
          >
            4
          </div>
        </div>
        {ButActive ? (
          <Link onClick={Next} className="next" style={colorIn} to="/Test8">
            Далее
          </Link>
        ) : (
          <Link className="next">Далее</Link>
        )}
      </div>
    </div>
  );
}
export default Test7;
