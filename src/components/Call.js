import React, { useState } from "react";

function Call() {
  const [result, setResult] = useState([]);
  const [Show, setShow] = useState({ display: "none" });
  function TestResult() {
    let testResult = {
      gender: localStorage.getItem("gender"),
      old: localStorage.getItem("old"),
      extra: localStorage.getItem("extra"),
      number: localStorage.getItem("number"),
      color: localStorage.getItem("color"),
      color2: localStorage.getItem("color2"),
      city: localStorage.getItem("city"),
      picture: localStorage.getItem("picture"),
      important: localStorage.getItem("important"),
      figure: localStorage.getItem("figure"),
    };
    console.log(testResult);
    fetch("https://swapi.dev/api/people/1/", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setResult(data);
      });
    setShow({ display: "grid" });
  }

  return (
    <div className="result-test">
      <div className="head-test">
        <img src="./img/rain_bk3.png" alt="" />
        <div className="head-text1">ГОТОВО!</div>
      </div>
      <div className="result-text1">Ваш результат рассчитан:</div>
      <div className="result-text2">
        вы относитесь к 3% респондентов, чей уровень интеллекта более чем на 15
        пунктов отличается от среднего в большую или меньшую сторону!
      </div>
      <div className="result-text3">Скорее получите свой результат!</div>
      <div className="result-text4">
        В целях защиты персональных данных результат теста, их подробная
        интерпретация и рекомендации доступны в виде голосового сообщения по
        звонку с вашего мобильного телефона
      </div>
      <div className="result-text5">Звоните скорее, запись доступна всего</div>
      <div className="result-text6">10:00 МИНУТ</div>
      <div className="result-text7" onClick={TestResult}>
        <img src="./img/call2.png" alt="" />
        позвонить и прослушать результат{" "}
      </div>
      <div className="getFromBase" style={Show}>
        <div>Your name:</div>
        <div>{result?.name}</div>
        <div>Birth year:</div>
        <div>{result?.birth_year}</div>
        <div>Eye color:</div>
        <div>{result?.eye_color}</div>
        <div>Gender:</div>
        <div>{result?.gender}</div>
        <div>Your hair color:</div>
        <div>{result?.hair_color}</div>
        <div>Your height:</div>
        <div>{result?.height}</div>
        <div>Your mass:</div>
        <div>{result?.mass}</div>
        <div>Your skin color:</div>
        <div>{result?.skin_color}</div>
      </div>
    </div>
  );
}
export default Call;
