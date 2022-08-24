import React, { useState } from "react";
import videoBg from './matrixBg.mp4'

function App() {
  const [result, setResult] = useState();
  const [errorMessage, setErrorMessage] = useState();
  var verification = { isValid: true };

  function handleChange(event) {
    let number = event.target.value;
    logicAplication(number);
  }

  function logicAplication(x) {
    handleNumber(x);
    erroMessenger();
  }

  // Making sure that we accept only either 0 or 1
  function handleNumber(x) {
    if (x.match(/^[0-1]+$/g) === null) {
      verification.isValid = false;
      return
    }
    verification.isValid = true;
    formulate(x);
  }

  function erroMessenger() {
    if (verification.isValid === false) {
      setErrorMessage('Enter either 0 or 1')
      setResult('') // Reset the result message
    } else { setErrorMessage('') } // Reset the error message
  }

  // Formulae:
  // input = 1 => output = 1 * (2^0) = 1
  // input = 1010 => output = (0 * (2^0)) + (1 * (2^1)+ (0 * (2^2)+ (1 * (2^3)) = 10
  function formulate(y) {
    let reversedBinaryText = y
      .split('')
      .map(Number)
      .reverse()
    let result = reversedBinaryText.reduce((accumulator, currentValue, idx) =>
      accumulator + currentValue * Math.pow(2, idx))
    setResult(result)
  }



  return (
    <div className="main">
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <h1>BIN2DEC</h1>
        <form>
          <label>
            Insert Number :
            <input type={"text"} onChange={handleChange} />
          </label>
        </form>
        <h2>{errorMessage}</h2>
        <h2>{result}</h2>
      </div>
    </div>
  );
}

export default App;
