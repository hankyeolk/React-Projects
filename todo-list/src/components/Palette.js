import React, { Component, Fragment } from "react";
import "./Palette.css";

function Palette() {
  return (
    <div className="palette">
      <div className={`colorBox default-color ${clicked && "active"}`}></div>
      <div className={`colorBox pink-color ${clicked && "active"}`}></div>
      <div className={`colorBox green-color ${clicked && "active"}`}></div>
      <div className={`colorBox blue-color ${clicked && "active"}`}></div>
    </div>
  );
}
