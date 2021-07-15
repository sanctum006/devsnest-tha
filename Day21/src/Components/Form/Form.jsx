import React, { useState } from "react";
import "./Form.css";

function Form({ setItems }) {
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");

  let id = 1;

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleChange1 = (e) => {
    setValue1(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems((temp) => [{ id: id, food: value, cal: value1 }, ...temp]);
    setValue("");
    setValue1("");
    id++;
  };

  return (
    <div className="form">
      <form action="POST" onSubmit={handleSubmit}>
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
        <button type="submit" className="btn">
          Add Item
        </button>
      </form>
    </div>
  );
}

export default Form;
