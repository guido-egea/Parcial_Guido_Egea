import React, { useState } from 'react';

const App = ({ onSubmit }) => {

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault(); 


    if (input1.trim().length < 3 || input1.trim().startsWith(' ')) {
      setErrorMessage('Por favor chequea que la información sea correcta');
      return;
    }
    if (input2.length < 6) {
      setErrorMessage('Por favor chequea que la información sea correcta');
      return;
    }


    setErrorMessage('');


    onSubmit({ input1, input2 });
  };

  return (
    <div>
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="input1">Input 1:</label>
          <input
            type="text"
            id="input1"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="input2">Input 2:</label>
          <input
            type="text"
            id="input2"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default App;