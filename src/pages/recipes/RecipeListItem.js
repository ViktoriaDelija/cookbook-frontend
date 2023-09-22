import React from "react";
import { Link } from "react-router-dom";

const RecipeListItem = ({ recipe }) => {
  return (
    <article key={recipe.id}>
      <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
    </article>
  );
};

export default RecipeListItem;
