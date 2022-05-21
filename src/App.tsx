import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Box from "./components/Box";

function App() {
  const [colors, setColors] = useState(generateColors(9));

  function generateColors(num: number) {
    const generated = [];
    for (let i = 0; i < num; i++) {
      generated.push("#" + Math.floor(Math.random() * 16777215).toString(16));
    }
    return generated;
  }

  console.log({ colors });

  return (
    <div className="App">
      <Box color="yes" />
    </div>
  );
}

export default App;
