// src/components/IngredientList/IngredientList.jsx

import React from 'react';

const IngredientList = (props) => {
  return (
    <ul>
      {props.ingredients.map((ingredient, index) => (
        <li
          key={index}
          style={{ backgroundColor: ingredient.color }}
          onClick={() => props.addToBurger(ingredient)}
        >
          {ingredient.name}
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;