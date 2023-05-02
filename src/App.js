import randomColor from 'randomcolor'; // import the script
import React, { useState } from 'react';

export default function App() {
  const [newColor, setNewColor] = useState(randomColor());

  return (
    <>
      <h1 className="title">Random Color Generator</h1>
      <div className="wrapper">
        <div className="colorCard">
          <div
            className="colorGeneratorBox"
            style={{ backgroundColor: newColor }}
          >
            Generated Color:
            <p className="newColor">{newColor.toUpperCase()}</p>
          </div>
          <button className="button" onClick={() => setNewColor(randomColor())}>
            Generate
          </button>
          <div className="description">
            Push the button to generate a random color
          </div>
        </div>
      </div>
    </>
  );
}
