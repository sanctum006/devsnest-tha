import { useState } from "react";
import "./App.css";
import Card from "./Components/Form/Card/Card";
import Form from "./Components/Form/Form";

function App() {
  const [items, setItems] = useState([]);
  return (
    <div className="app">
      <Form setItems={setItems} />
      <h1>Start Adding Items</h1>
      {items?.map((item) => {
        console.log("ASD");
        if (item == null) return;
        return (
          <Card
            key={item.id}
            id={item.id}
            food={item.food}
            cal={item.cal}
            items={items}
            setItems={setItems}
          />
        );
      })}
    </div>
  );
}

export default App;
