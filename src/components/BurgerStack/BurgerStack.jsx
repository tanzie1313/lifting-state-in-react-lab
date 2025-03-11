// src/components/BurgerStack/BurgerStack.jsx

import React from 'react';
import Ingredient from '../Ingredient/Ingredient.jsx';


const BurgerStack = (props) => {
  return (
    <ul>
      {props.ingredients.length === 0 ? (
        <li>No Ingredients</li>
      ) : (
        props.ingredients.map((ingredient, index) => (
          <Ingredient
            key={index}
            ingredient={ingredient}
            onClick={() => props.removeFromBurger(index)}
            buttonLabel="X"
          />
        ))
      )}
    </ul>
  );
};

export default BurgerStack;