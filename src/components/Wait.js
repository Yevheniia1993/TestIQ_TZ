import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./wait.css";

function Wait() {
  const navigate = useNavigate();
  useEffect(() => {
    let timerId = setTimeout(() => navigate("/Call"), 3000);
    return () => {
      clearTimeout(timerId);
    };
  });

  return (
    <div className="result-test">
      <div className="head-test">
        <img src="./img/rain_bk3.png" alt="" />
        <div className="head-text">ТЕСТ НА ОПРЕДЕЛЕНИЕ IQ</div>
      </div>
      <div className="line-test">
        <div className="green-line" style={{ width: "260px" }}></div>
      </div>
      <div className="text-wait">ОБРАБОТКА РЕЗУЛЬТАТОВ</div>
      <div className="loader" />
      <div className="text-wait1">
        Определение стиля мышления......................................
        ..................................................
      </div>
    </div>
  );
}
export default Wait;
