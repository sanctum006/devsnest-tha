import React, { useState } from "react";
import "./styles.css";
import Card from "./Card.jsx";

const getJoke = () => {
  console.log(joke);
};

class App extends React.Component {
  state = {
    joke: ""
  };

  componentDidMount() {
    fetch("https://v2.jokeapi.dev/joke/Programming?format=txt&type=single")
      .then((data) => data.text())
      .then((joke) => this.setState({ joke }));
  }

  render() {
    // console.log(this.state.joke);

    return (
      <div className="app">
        <Card joke={this.state.joke} />
      </div>
    );
  }
}

export default App;
