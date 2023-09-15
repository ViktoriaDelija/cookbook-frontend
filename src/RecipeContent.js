import React from "react";
import RecipeList from "./RecipeList";

const RecipeContent = ({ recipes, setRecipes }) => {
  return (
    <div>
      <RecipeList recipes={recipes} setRecipes={setRecipes} />
    </div>
  );
};

export default RecipeContent;
