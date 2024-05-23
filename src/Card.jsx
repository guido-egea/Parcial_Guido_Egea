import React from 'react';

const Card = ({ input1, input2 }) => {
  return (
    <div>
      <h2>Información ingresada:</h2>
      <p>Input 1: {input1}</p>
      <p>Input 2: {input2}</p>

    </div>
  );
};

export default Card;
