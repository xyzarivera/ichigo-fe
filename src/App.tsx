import React, { useState } from "react";
import "./App.css";
import Box from "./components/Box";

function App() {
  function generateColors(num: number): string[] {
    const generated = [];
    for (let i = 0; i < num; i++) {
      generated.push("#" + Math.floor(Math.random() * 16777215).toString(16));
    }
    return generated;
  }

  const totalBoxes = 9;
  const [colors, setColors] = useState(generateColors(totalBoxes));

  function changeColors(): void {
    setColors(generateColors(totalBoxes));
    // console.log({ colors });
  }

  return (
    <div className="App">
      <div className="upper-half">
        <Box color={colors[0]} onClick={changeColors} num="1" gridArea="one" />
        <Box color={colors[1]} onClick={changeColors} num="2" gridArea="two" />
        <Box
          color={colors[2]}
          onClick={changeColors}
          num="3"
          gridArea="three"
        />
        <Box color={colors[3]} onClick={changeColors} num="4" gridArea="four" />
      </div>
      <div className="lower-half">
        <Box color={colors[4]} onClick={changeColors} num="5" gridArea="five" />
        <Box color={colors[5]} onClick={changeColors} num="6" gridArea="six" />
        <Box
          color={colors[6]}
          onClick={changeColors}
          num="7"
          gridArea="seven"
        />
        <Box
          color={colors[7]}
          onClick={changeColors}
          num="8"
          gridArea="eight"
        />
        <Box color={colors[8]} onClick={changeColors} num="9" gridArea="nine" />
      </div>
    </div>
  );
}

export default App;
