import { GetColorName } from 'hex-color-to-color-name';
import randomColor from 'randomcolor'; // import the script
import React, { useState } from 'react';

export default function App() {
  const [newColor, setNewColor] = useState(randomColor());
  const colorName = GetColorName(newColor);

  return (
    <>
      <h1 className="title">Random Color Generator</h1>
      <div className="wrapper">
        <div className="colorCard">
          <div
            className="colorGeneratorBox colorGeneratorBoxTransition"
            style={{ backgroundColor: newColor }}
          >
            Generated Color: {newColor}
            {/* <p className="newColor">{newColor.toUpperCase()}</p> */}
          </div>
          <p className="newColor newTitle">{colorName}</p>
          <button className="button" onClick={() => setNewColor(randomColor())}>
            Generate
          </button>
          <div className="description">
            Push the button to generate a random color
          </div>
        </div>
      </div>
      <pre className="basic">
        This is meant to resemble the appearance of popular{' '}
        <a href="https://www.pantone.com/pantone-postcards">Pantone cards.</a>
      </pre>
    </>
  );
}
