import React, { useState } from "react";
import "./Card.css";

function Card({ id, food, cal, items, setItems }) {
  const [edit, setEdit] = useState(true);
  const handleChange = (e) => {
    setValue(e.target.value);
    food = value;
  };

  const handleChange1 = (e) => {
    setValue1(e.target.value);
    cal = value1;
  };
  const handleChangesDone = () => {
    handleDelete();
    setItems((list) => [...list, { id: id, food: value, cal: value1 }]);
    setEdit(!edit);
  };

  const handleDelete = () => {
    const list = items.map((listItem) => {
      if (
        listItem == null ||
        (listItem.id == id && listItem.food == food && listItem.cal == cal)
      )
        return null;
      console.log({ id: id, food: food, cal: cal });
      console.log(listItem);
      return listItem;
    });
    console.log(list);
    setItems(list);
  };

  const [value, setValue] = useState(food);
  const [value1, setValue1] = useState(cal);
  return (
    <div className="card">
      {edit ? (
        <>
          <h3>{food}</h3>
          <p>You've consumed {cal} calories.</p>
          <button onClick={() => setEdit(!edit)} className="btn">
            Edit
          </button>
          <button onClick={handleDelete} className="btn">
            Delete
          </button>
        </>
      ) : (
        <>
          <div className="input__elements">
            <input
              type="text"
              onChange={handleChange}
              value={value}
              placeholder="Item name"
            />
            <input
              type="number"
              onChange={handleChange1}
              value={value1}
              min="0"
              placeholder="Calorie Amount"
            />
          </div>
          <button onClick={handleDelete} className="btn">
            Delete
          </button>
          <button onClick={handleChangesDone} className="btn">
            Done
          </button>
        </>
      )}
    </div>
  );
}

export default Card;
