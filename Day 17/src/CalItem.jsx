import React from "react";
import "./CalItem.css";

function CalItem({ h, p }) {
  return (
    <div className="cal-item">
      <h1>{h}</h1>
      <p>{p}</p>
    </div>
  );
}

export default CalItem;
