import { useEffect, useState } from "react";
import "./App.css";
import Meme from "./Meme";
import Templates from "./Templates";

function App() {
  const [templates, setTemplates] = useState([]);
  const [meme, setMeme] = useState(null);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setTemplates(data.data.memes);
      });
  }, []);
  return (
    <div className="app">
      <h1>Meme Generator</h1>
      {meme ? (
        <Meme key={meme?.id} meme={meme} setMeme={setMeme} />
      ) : (
        <Templates key={meme?.id} templates={templates} setMeme={setMeme} />
      )}
    </div>
  );
}

export default App;
