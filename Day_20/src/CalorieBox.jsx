import React, {useState} from 'react';
import Card from "./Card";

const CalorieBox = () => {
  const [foods, setFoods] = useState([{name:'Pizza', calorie:13 },{name:'Burger', calorie:34 },{name:'Coke', calorie:234 },{name:'Browne', calorie:34 },{name:'Fried Rice', calorie:43 },{name:'Lassania', calorie:43 },{name:'Pani Puri', calorie:42 }]);
  return <div className="calorie-box">
    {foods.length !== 0 ? foods.map((food, index) => <Card key={index} id={index} name={food.name} calorie={food.calorie} setFoods={setFoods} />) : "No Entry!!"}
  </div>
}

export default CalorieBox;