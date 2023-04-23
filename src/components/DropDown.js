import React, { useState } from "react";
import { Link } from "react-router-dom";
function DropDown() {
  const [open, setOpen] = useState(false);
  function MyFunction() {
    setOpen(true);
  }
  function ClouseFunction() {
    setOpen(false);
  }

  return (
    <div className="dropdown-head">
      <div className="dropdown">
        <button onClick={MyFunction} className="dropbtn">
          <img src="./img/menu.png" alt="" />
        </button>
        {open ? (
          <div>
            {" "}
            <div id="myDropdown" className="dropdown-content">
              <img
                className="close-btn"
                onClick={ClouseFunction}
                src="./img/icon.png"
                alt=""
              />
              <div className="all-a">
                <Link className="text-link" onClick={ClouseFunction} to="/">
                  ГЛАВНАЯ
                </Link>
                <Link className="text-link" onClick={ClouseFunction} to="/Test">
                  ИНФОРМАЦИЯ О ТЕСТЕ
                </Link>
                <Link className="text-link" onClick={ClouseFunction} to="/Test">
                  ПРОЙТИ ТЕСТ
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
export default DropDown;
