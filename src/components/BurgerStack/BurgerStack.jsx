// src/components/BurgerStack/BurgerStack.jsx

import React from 'react';

const BurgerStack = (props) => {
  return (
    <ul>
      {props.ingredients.map((ingredient, index) => (
        <li key={index} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => props.removeFromBurger(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;