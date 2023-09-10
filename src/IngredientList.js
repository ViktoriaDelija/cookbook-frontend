import React from "react";
import IngredientListItem from "./IngredientListItem";

const IngredientList = ({ ingredients, setIngredients }) => {
  return (
    <ul>
      {ingredients.map((ingredient) => (
        <IngredientListItem
          ingredients={ingredients}
          setIngredients={setIngredients}
          ingredient={ingredient}
        />
      ))}
    </ul>
  );
};

export default IngredientList;
