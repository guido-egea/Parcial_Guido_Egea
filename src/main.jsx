import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Card from './Card';

const Main = () => {
  const [cardData, setCardData] = useState(null);

  const handleFormSubmit = (data) => {
    setCardData(data);
  };

  return (
    <div>
      <h1 style={{ color: 'red', background: 'blue', border: '3px solid black', width: '20%' }}>Parcial Guido Egea</h1>

      <App onSubmit={handleFormSubmit} />

      {cardData && <Card input1={cardData.input1} input2={cardData.input2} />}
    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));

export default Main;