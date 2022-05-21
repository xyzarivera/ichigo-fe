import React, { useState } from "react";
import "./App.css";
import Box from "./components/Box";

function App() {
  const [colors, setColors] = useState(generateColors(9));

  function generateColors(num: number): string[] {
    const generated = [];
    for (let i = 0; i < num; i++) {
      generated.push("#" + Math.floor(Math.random() * 16777215).toString(16));
    }
    return generated;
  }

  function changeColors(num: number): void {
    setColors(generateColors(num));
    console.log({ colors });
  }

  return (
    <div className="App">
      <Box color={colors[1]} onClick={changeColors} />
      <Box color={colors[2]} onClick={changeColors} />
    </div>
  );
}

export default App;
