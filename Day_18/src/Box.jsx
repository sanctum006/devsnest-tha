import React from "react";

export default function Box({ clr }) {
  console.log(clr);

  return <div className="box" style={{ backgroundColor: clr }}></div>;
}
