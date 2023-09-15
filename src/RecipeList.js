import React from "react";
import RecipeListItem from "./RecipeListItem";

const RecipeList = ({ recipes, setRecipes }) => {
  return (
    <article>
      {recipes.map((recipe) => (
        <RecipeListItem key={recipe.id} recipe={recipe} />
      ))}
    </article>
  );
};

export default RecipeList;
