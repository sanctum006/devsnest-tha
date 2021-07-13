import Counter from "./Counter";

const arr = [0, 1, 2, 3];

export default function App() {
  return (
    <div className="app">
      {arr.map((ele) => (
        <Counter key={ele} />
      ))}
    </div>
  );
}
