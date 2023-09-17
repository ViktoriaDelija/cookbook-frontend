import React from "react";
import RecipeContent from "./RecipeContent";
import RecipeHeader from "./RecipeHeader";

const Recipes = ({ recipes, setRecipes }) => {
  return (
    <div>
      <RecipeHeader />
      <RecipeContent recipes={recipes} setRecipes={setRecipes} />
    </div>
  );
};

export default Recipes;
