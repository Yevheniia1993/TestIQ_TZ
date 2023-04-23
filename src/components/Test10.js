import React, { useState } from "react";
import { Link } from "react-router-dom";
function Test10() {
  const [NumberStar, setNumberStar] = useState("");
  const [colorIn, setColorIn] = useState({ background: "", color: "" });
  const [ButActive, setActive] = useState(false);
  function DataTest(event) {
    setActive(true);
    setNumberStar(event.target.id);
    setColorIn({ background: "#FFC700", color: "#272727" });
  }
  function NextFinish() {
    localStorage.setItem("numberStar", NumberStar);
  }
  return (
    <div className="all-test">
      <div className="head-test">
        <img src="./img/rain_bk3.png" alt="" />
        <div className="head-text">ТЕСТ НА ОПРЕДЕЛЕНИЕ IQ</div>
      </div>
      <div className="line-test">
        <div className="green-line" style={{ width: "190px" }}></div>
      </div>
      <div className="body-testFour">
        <div className="question-test2">Вставьте подходящее число</div>
        <img className="img-test10" src="./img/image4.png" alt="" />
        <div className="data3">
          <div
            id="34"
            onClick={DataTest.bind(this)}
            style={{ background: "white" }}
          >
            34
          </div>
          <div
            id="36"
            onClick={DataTest.bind(this)}
            style={{ background: "white" }}
          >
            36
          </div>
          <div
            id="53"
            onClick={DataTest.bind(this)}
            style={{ background: "white" }}
          >
            53
          </div>
          <div
            id="44"
            onClick={DataTest.bind(this)}
            style={{ background: "white" }}
          >
            44
          </div>
          <div
            id="66"
            onClick={DataTest.bind(this)}
            style={{ background: "white" }}
          >
            66
          </div>
          <div
            id="42"
            onClick={DataTest.bind(this)}
            style={{ background: "white" }}
          >
            42
          </div>
        </div>
        {ButActive ? (
          <Link
            onClick={NextFinish}
            className="next"
            style={colorIn}
            to="/Wait"
          >
            Далее
          </Link>
        ) : (
          <Link className="next">Далее</Link>
        )}
      </div>
    </div>
  );
}
export default Test10;
