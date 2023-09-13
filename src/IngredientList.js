import React from "react";
import IngredientListItem from "./IngredientListItem";

const IngredientList = ({ ingredients, setIngredients }) => {
  return (
    <article>
      {ingredients.map((ingredient) => (
        <IngredientListItem
          key={ingredient.id}
          ingredients={ingredients}
          setIngredients={setIngredients}
          ingredient={ingredient}
        />
      ))}
    </article>
  );
};

export default IngredientList;
