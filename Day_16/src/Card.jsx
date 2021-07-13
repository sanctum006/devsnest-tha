import React from "react";

export default function Card({ joke }) {
  // console.log(joke);

  return (
    <div className="card">
      <div className="joke">
        <i>{joke}</i>
      </div>
      <div className="card-info">React Joke Card</div>
    </div>
  );
}
