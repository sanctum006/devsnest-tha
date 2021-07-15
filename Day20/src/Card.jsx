import React from 'react';

const Card = ({ id, name, calorie, setFoods }) => {

  const handleClick = (e) => {
    console.log(e.target.parentNode.classList[1]);
    setFoods(arr => {
      return arr.filter((item, index) => index != e.target.parentNode.classList[1])
    })
  }
  return <div className="card">
    <div className={`header ${id}`}>
      <h2>{name}</h2>
      <button onClick={handleClick}>Delete</button>
    </div>
    <p>{`You've Consumed ${calorie} cals today`}</p>
  </div>
}

export default Card;