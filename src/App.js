import { GetColorName } from 'hex-color-to-color-name';
import randomColor from 'randomcolor'; // import the script
import React, { useState } from 'react';

export default function App() {
  const [newColor, setNewColor] = useState(randomColor());
  const [hue, setHue] = useState('');
  const [lumen, setLumen] = useState('');
  const colorName = GetColorName(newColor);

  function findColor(hueInput, luminosityInput) {
    setNewColor(
      randomColor({
        luminosity: luminosityInput,
        hue: hueInput,
      }),
    );
  }

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
        <p>
          This is meant to resemble the appearance of popular{' '}
          <a href="https://www.pantone.com/pantone-postcards">Pantone cards.</a>
        </p>
        <p>
          You can also type hues and color luminosity and search for a color
          here:
        </p>
      </pre>

      {/* Input fields */}
      <h2 className="title">
        Need a specific color tone?
        <br />
        <br /> Find your color here!
      </h2>
      <div className="basic">
        <label htmlFor="hue">
          <pre>Hue</pre>
        </label>
        <input
          id="hue"
          placeholder="Hue (Blue, etc...)"
          value={hue}
          onChange={(event) => setHue(event.currentTarget.value)}
        />
        <label htmlFor="luminosity">
          <pre>Luminosity</pre>
        </label>
        <input
          id="luminosity"
          placeholder="Luminosity (bright, dark, etc...)"
          value={lumen}
          onChange={(event) => setLumen(event.currentTarget.value)}
        />
        <p />
        <button
          className="extraButton"
          onClick={() => {
            findColor(hue, lumen);
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
}
