import Box from "./Box";
import "./styles.css";

let arr = ["black", "white"];

export default function App() {
  const boxElements = [];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      boxElements.push(<Box key={i + j} clr={arr[j % 2]} />);
    }

    arr.reverse();
  }
  return <div className="app">{boxElements}</div>;
}
