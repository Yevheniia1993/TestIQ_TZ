import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DropDown from "./components/DropDown";
import Test from "./components/Test";
import Test1 from "./components/Test1";
import Test2 from "./components/Test2";
import Test3 from "./components/Test3";
import Test4 from "./components/Test4";
import Test5 from "./components/Test5";
import Test6 from "./components/Test6";
import Test7 from "./components/Test7";
import Test8 from "./components/Test8";
import Test9 from "./components/Test9";
import Test10 from "./components/Test10";
import Call from "./components/Call";
import Wait from "./components/Wait";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <DropDown />
    <Routes>
      <Route index element={<App />} />
      <Route path="/Test" element={<Test />} />
      <Route path="/Test1" element={<Test1 />} />
      <Route path="/Test2" element={<Test2 />} />
      <Route path="/Test3" element={<Test3 />} />
      <Route path="/Test4" element={<Test4 />} />
      <Route path="/Test5" element={<Test5 />} />
      <Route path="/Test6" element={<Test6 />} />
      <Route path="/Test7" element={<Test7 />} />
      <Route path="/Test8" element={<Test8 />} />
      <Route path="/Test9" element={<Test9 />} />
      <Route path="/Test10" element={<Test10 />} />
      <Route path="/Wait" element={<Wait />} />
      <Route path="/Call" element={<Call />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
