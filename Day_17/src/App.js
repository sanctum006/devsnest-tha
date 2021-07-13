import React from "react";
import "./App.css";
import CalItem from "./CalItem.jsx";

var calList = [
  { h: "Pizza", p: "you have consumed 56 cals today" },
  { h: "Burger", p: "you have consumed 69 cals today" },
  { h: "Coke", p: "you have consumed 500 cals today" },
  { h: "Brownie", p: "you have consumed 180 cals today" },
  { h: "Fried Rice", p: "you have consumed 90 cals today" },
  { h: "Lassania", p: "you have consumed 200 cals today" },
  { h: "Pani Puri", p: "you have consumed 10 cals today" }
];

class App extends React.Component {
  // var items = ;

  render() {
    return (
      <div className="app">
        {calList.map((item) => (
          <CalItem h={item.h} p={item.p} />
        ))}
      </div>
    );
  }
}

export default App;
