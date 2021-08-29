import React, {useState} from 'react';
import Todos from "./components/Todos";
import "./App.css"

const App = () => {
    const [theme, setTheme] = useState<boolean>(true)

    return (
        <div className="app">
            <Todos/>
        </div>
    );
}

export default App;
