import "./styles.css";
import "./Slider.css";
import React from "react";

// This component consists of the skeleton of the range slider
export default function Slider() {
  return (
    <div className="wrapper">
      <div className="values">
        <span id="range1">0</span>
        <span> - </span>
        <span id="range2">100</span>
      </div>
      <div className="container">
        <div className="slider_track"></div>

        <input
          type="range"
          id="slider_1"
          min="0"
          max="100"
          defaultValue="30"
          step="1"
        />
        <input
          type="range"
          id="slider_2"
          min="0"
          max="100"
          defaultValue="30"
          step="1"
        />
      </div>
    </div>
  );
}
