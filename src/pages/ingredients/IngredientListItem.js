import React from "react";
import { Link } from "react-router-dom";
import IngredientDetails from "./IngredientDetails";

const IngredientListItem = ({ ingredient, ingredients, setIngredients }) => {
  return (
    <article className="ingredient" key={ingredient.id}>
      <Link to={`/ingredients/${ingredient.id}`}> {ingredient.name}</Link>
    </article>
  );
};

export default IngredientListItem;
