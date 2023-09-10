import React from "react";

const IngredientListItem = ({ ingredient, ingredients, setIngredients }) => {
  return (
    <li className="ingredient" key={ingredient.ID}>
      {ingredient.name}
    </li>
  );
};

export default IngredientListItem;
